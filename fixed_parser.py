#!/usr/bin/env python3
"""
Robust parser that reads Index.md files and generates complete navigation JSONs
Uses line-by-line parsing instead of complex regex
"""

import json
import re
import os
from pathlib import Path

def parse_index_md_simple(file_path):
    """Simple line-by-line parser for Index.md files."""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Extract frontmatter
    specialty_key = None
    title = "Unknown Specialty"
    in_frontmatter = False
    content_start = 0
    
    for i, line in enumerate(lines):
        line = line.strip()
        if line == '---':
            if not in_frontmatter:
                in_frontmatter = True
            else:
                content_start = i + 1
                break
        elif in_frontmatter and line.startswith('specialty:'):
            specialty_key = line.split('"')[1] if '"' in line else line.split(':')[1].strip()
        elif line.startswith('# '):
            title = line[2:].strip()
    
    # Parse content structure
    specialty_data = {
        'display_en': title,
        'display_es': title,
        'topics': {}
    }
    
    current_section = None
    current_subsection = None
    
    for i in range(content_start, len(lines)):
        line = lines[i].strip()
        
        if line.startswith('## '):
            # Main section (Outpatient Setting, Emergency Room, Hospitalization)
            current_section = line[3:].strip()
            specialty_data['topics'][current_section] = {}
            current_subsection = None
            
        elif line.startswith('### '):
            # Subsection (frequency/mortality categories)
            current_subsection = line[4:].strip()
            if current_section and current_subsection:
                specialty_data['topics'][current_section][current_subsection] = []
                
        elif line.startswith('- [') and current_section and current_subsection:
            # Extract topic from line like "- [Topic Name (F█ M▂)]"
            topic = line[3:-1]  # Remove "- [" and "]"
            specialty_data['topics'][current_section][current_subsection].append(topic)
    
    return specialty_key, specialty_data

def clean_topic_name(topic):
    """Extract clean topic name and indicators."""
    # Handle various unicode encodings of the symbols
    topic_clean = re.sub(r' \([FM].{1,5} [FM].{1,5}\)', '', topic)
    indicators = re.search(r'(\([FM].{1,5} [FM].{1,5}\))', topic)
    indicators_str = indicators.group(1) if indicators else ''
    return topic_clean, indicators_str

def create_url_name(topic_clean):
    """Create URL-friendly filename."""
    url_name = topic_clean.lower()
    url_name = re.sub(r'[^a-z0-9\s-]', '', url_name)  # Remove special chars
    url_name = re.sub(r'\s+', '-', url_name)  # Replace spaces with dashes
    url_name = re.sub(r'-+', '-', url_name)  # Collapse multiple dashes
    url_name = url_name.strip('-')  # Remove leading/trailing dashes
    return url_name

def create_navigation_json(specialty_key, specialty_data):
    """Create navigation JSON structure."""
    nav_structure = {
        'ui_strings': {
            'en': {
                'charcotImageTitle': f'Learn more about {specialty_data["display_en"]}',
                'charcotImageAlt': specialty_data['display_en'],
                'navUnavailableMsg': f'{specialty_data["display_en"]} navigation menu is currently unavailable.',
                'navErrorMsg': f'Error loading {specialty_key} navigation menu. See console for details.',
                'legendTitle': 'Symbol Legend:',
                'legendFC': 'Frequency of Consultation',
                'legendMA': 'Mortality Associated',
                'legendHigh': 'High',
                'legendMedium': 'Medium',
                'legendLow': 'Low',
                'legendIndicators': '(Indicators like (F█ M▂) appear if data is available)'
            },
            'es': {
                'charcotImageTitle': f'Aprender más sobre {specialty_data["display_es"]}',
                'charcotImageAlt': specialty_data['display_es'],
                'navUnavailableMsg': f'El menú de navegación de {specialty_key} no está disponible actualmente.',
                'navErrorMsg': f'Error al cargar el menú de navegación de {specialty_key}. Consulte la consola para más detalles.',
                'legendTitle': 'Leyenda de Símbolos:',
                'legendFC': 'Frecuencia de Consulta',
                'legendMA': 'Mortalidad Asociada',
                'legendHigh': 'Alta',
                'legendMedium': 'Media',
                'legendLow': 'Baja',
                'legendIndicators': '(Indicadores como (F█ M▂) aparecen si hay datos disponibles)'
            }
        },
        'sections': [
            {
                'title': {
                    'en': specialty_data['display_en'],
                    'es': specialty_data['display_es']
                },
                'id': f'nav-header-{specialty_key}',
                'items': [
                    {
                        'label': {
                            'en': 'Home',
                            'es': 'Inicio'
                        },
                        'url': 'index.html',
                        'id': 'nav-link-home'
                    }
                ]
            },
            {
                'id': 'support-header',
                'items': [
                    {
                        'label': {
                            'en': 'Invite me a coffee',
                            'es': 'Invítame un café'
                        },
                        'url': '#',
                        'id': 'nav-link-invite-coffee'
                    }
                ]
            }
        ]
    }
    
    # Setting translations
    setting_translations = {
        'Outpatient Setting': {'en': 'Outpatient Setting', 'es': 'Consulta Externa'},
        'Emergency Room': {'en': 'Emergency Room', 'es': 'Sala de Emergencias'},
        'Hospitalization': {'en': 'Hospitalization', 'es': 'Hospitalización'}
    }
    
    # Add clinical settings with topics
    for setting, groups in specialty_data['topics'].items():
        setting_item = {
            'label': setting_translations.get(setting, {'en': setting, 'es': setting}),
            'id': f'nav-cat-{setting.lower().replace(" ", "-")}',
            'subItems': []
        }
        
        # Add all topics from all groups in this setting
        for group_name, topics in groups.items():
            for topic in topics:
                topic_clean, indicators_str = clean_topic_name(topic)
                url_name = create_url_name(topic_clean)
                
                topic_item = {
                    'label': {
                        'en': f'{topic_clean} {indicators_str}'.strip(),
                        'es': f'{topic_clean} {indicators_str}'.strip()
                    },
                    'url': f'{url_name}.html',
                    'id': f'nav-link-{url_name}'
                }
                setting_item['subItems'].append(topic_item)
        
        nav_structure['sections'][0]['items'].append(setting_item)
    
    return nav_structure

def count_topics(topics_dict):
    """Count total topics."""
    total = 0
    for setting, groups in topics_dict.items():
        for group_name, topics in groups.items():
            total += len(topics)
    return total

def main():
    """Process all Index.md files."""
    experimental_dir = Path('experimental/specialties')
    output_dir = Path('assets/data')
    
    if not experimental_dir.exists():
        print(f"Error: {experimental_dir} not found")
        return
    
    index_files = list(experimental_dir.glob('*/Index.md'))
    print(f"Found {len(index_files)} Index.md files to process")
    
    total_topics = 0
    successful_files = 0
    
    for index_file in index_files:
        try:
            print(f"\nProcessing {index_file}...")
            
            specialty_key, specialty_data = parse_index_md_simple(index_file)
            
            if not specialty_key:
                specialty_key = index_file.parent.name.lower()
                print(f"  Using directory name as key: {specialty_key}")
            
            # Count topics
            topic_count = count_topics(specialty_data['topics'])
            print(f"  Extracted {topic_count} topics from {len(specialty_data['topics'])} sections")
            
            if topic_count == 0:
                print(f"  WARNING: No topics found in {index_file}")
                continue
            
            # Generate navigation JSON
            nav_json = create_navigation_json(specialty_key, specialty_data)
            
            # Write output file
            output_file = output_dir / f'navigation-menu-{specialty_key}.json'
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(nav_json, f, indent=2, ensure_ascii=False)
            
            print(f"  ✓ Generated {output_file} with {topic_count} topics")
            total_topics += topic_count
            successful_files += 1
            
        except Exception as e:
            print(f"  ✗ Error processing {index_file}: {e}")
    
    print(f"\n=== SUMMARY ===")
    print(f"Successfully processed: {successful_files}/{len(index_files)} files")
    print(f"Total topics generated: {total_topics}")
    print(f"Navigation files updated in: {output_dir}")

if __name__ == '__main__':
    main()