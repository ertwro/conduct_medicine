#!/usr/bin/env python3
"""
Complete parser to generate navigation JSON files for ALL medical specialties
by reading and parsing their Index.md files from experimental/specialties/
"""

import json
import re
import os
from pathlib import Path

def parse_index_md(file_path):
    """Parse an Index.md file and extract specialty data structure."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter to get specialty name
    frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.MULTILINE | re.DOTALL)
    if frontmatter_match:
        frontmatter = frontmatter_match.group(1)
        specialty_match = re.search(r'specialty:\s*"(.+?)"', frontmatter)
        specialty_key = specialty_match.group(1) if specialty_match else None
    else:
        specialty_key = None
    
    # Extract title from the first # heading
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else "Unknown Specialty"
    
    # Parse the structure
    specialty_data = {
        'display_en': title,
        'display_es': title,  # For now, keep the same; can be translated later
        'topics': {}
    }
    
    # Find all sections (## headings)
    sections = re.findall(r'^## (.+)$', content, re.MULTILINE)
    
    for section in sections:
        specialty_data['topics'][section] = {}
        
        # Find content for this section
        section_pattern = f'^## {re.escape(section)}$(.*?)(?=^##|$)'
        section_match = re.search(section_pattern, content, re.MULTILINE | re.DOTALL)
        
        if section_match:
            section_content = section_match.group(1)
            
            # Find all subsections (### headings)
            subsections = re.findall(r'^### (.+)$', section_content, re.MULTILINE)
            
            for subsection in subsections:
                # Find items for this subsection
                subsection_pattern = f'^### {re.escape(subsection)}$(.*?)(?=^###|^##|$)'
                subsection_match = re.search(subsection_pattern, section_content, re.MULTILINE | re.DOTALL)
                
                if subsection_match:
                    subsection_content = subsection_match.group(1)
                    
                    # Extract list items - handle both [text] and bare text formats
                    items = re.findall(r'^- (?:\[(.+?)\]|(.+))$', subsection_content, re.MULTILINE)
                    # Flatten the results and filter out empty matches
                    items = [item[0] if item[0] else item[1] for item in items if item[0] or item[1]]
                    specialty_data['topics'][section][subsection] = items
    
    return specialty_key, specialty_data

def clean_topic_name(topic):
    """Extract clean topic name and indicators from full topic string."""
    # More flexible pattern to handle unicode encoding issues
    topic_clean = re.sub(r' \([FM].{1,3} [FM].{1,3}\)', '', topic)
    indicators = re.search(r'(\([FM].{1,3} [FM].{1,3}\))', topic)
    indicators_str = indicators.group(1) if indicators else ''
    return topic_clean, indicators_str

def create_url_name(topic_clean):
    """Create URL-friendly filename from topic name."""
    url_name = topic_clean.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '').replace(',', '').replace(':', '')
    url_name = re.sub(r'-+', '-', url_name).strip('-')
    return url_name

def create_navigation_json(specialty_key, specialty_data):
    """Create complete navigation JSON structure for a specialty."""
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
    
    # Add clinical settings
    setting_translations = {
        'Outpatient Setting': {'en': 'Outpatient Setting', 'es': 'Consulta Externa'},
        'Emergency Room': {'en': 'Emergency Room', 'es': 'Sala de Emergencias'},
        'Hospitalization': {'en': 'Hospitalization', 'es': 'Hospitalización'}
    }
    
    for setting, groups in specialty_data['topics'].items():
        setting_item = {
            'label': setting_translations.get(setting, {'en': setting, 'es': setting}),
            'id': f'nav-cat-{setting.lower().replace(" ", "-")}',
            'subItems': []
        }
        
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
    """Count total number of topics in a specialty."""
    total = 0
    for setting, groups in topics_dict.items():
        for group_name, topics in groups.items():
            total += len(topics)
    return total

def main():
    """Main function to parse all Index.md files and generate navigation JSONs."""
    experimental_dir = Path('experimental/specialties')
    output_dir = Path('assets/data')
    
    if not experimental_dir.exists():
        print(f"Error: {experimental_dir} directory not found")
        return
    
    # Find all Index.md files
    index_files = list(experimental_dir.glob('*/Index.md'))
    
    if not index_files:
        print(f"No Index.md files found in {experimental_dir}")
        return
    
    print(f"Found {len(index_files)} Index.md files to process")
    
    for index_file in index_files:
        try:
            print(f"\nProcessing {index_file}...")
            
            # Parse the Index.md file
            specialty_key, specialty_data = parse_index_md(index_file)
            
            if not specialty_key:
                print(f"Warning: Could not extract specialty key from {index_file}")
                specialty_key = index_file.parent.name.lower()
            
            # Debug output
            topics_found = sum(len(groups) for groups in specialty_data['topics'].values())
            print(f"  Found {topics_found} topic groups in {len(specialty_data['topics'])} sections")
            
            # Generate navigation JSON
            nav_json = create_navigation_json(specialty_key, specialty_data)
            
            # Write to file
            output_file = output_dir / f'navigation-menu-{specialty_key}.json'
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(nav_json, f, indent=2, ensure_ascii=False)
            
            # Count and report
            topic_count = count_topics(specialty_data['topics'])
            print(f"Generated {output_file} with {topic_count} topics")
            
        except Exception as e:
            print(f"Error processing {index_file}: {e}")
    
    print(f"\nNavigation generation complete!")

if __name__ == '__main__':
    main()