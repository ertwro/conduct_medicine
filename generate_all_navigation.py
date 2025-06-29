#!/usr/bin/env python3
"""
Generate complete navigation JSON files for all medical specialties
"""

import json
import re
import os

def clean_topic_name(topic):
    topic_clean = re.sub(r' \([FM][█▄▂] [FM][█▄▂]\)', '', topic)
    indicators = re.search(r'(\([FM][█▄▂] [FM][█▄▂]\))', topic)
    indicators_str = indicators.group(1) if indicators else ''
    return topic_clean, indicators_str

def create_url_name(topic_clean):
    url_name = topic_clean.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '').replace(',', '').replace(':', '')
    url_name = re.sub(r'-+', '-', url_name).strip('-')
    return url_name

def create_navigation_json(specialty_key, specialty_data):
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
    
    setting_translations = {
        'Outpatient Setting': {'en': 'Outpatient Setting', 'es': 'Consulta Externa'},
        'Emergency Room': {'en': 'Emergency Room', 'es': 'Sala de Emergencias'},
        'Hospitalization': {'en': 'Hospitalization', 'es': 'Hospitalización'}
    }
    
    for setting, groups in specialty_data['topics'].items():
        setting_item = {
            'label': setting_translations[setting],
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

# Generate sample for Gastroenterology (complete data)
gastroenterology_data = {
    'display_en': 'Gastroenterology',
    'display_es': 'Gastroenterología',
    'topics': {
        'Outpatient Setting': {
            'High Frequency / Low Mortality (F█ M▂)': [
                'GERD (F█ M▂)',
                'Peptic ulcer (F█ M▂)',
                'Constipation and diarrhea (F█ M▂)',
                'Irritable bowel disease (F█ M▂)',
                'Functional dyspepsia, gastroparesis, ileus (F█ M▂)'
            ],
            'High Frequency / Medium Mortality (F█ M▄)': [
                'Inflammatory bowel Disease (F█ M▄)',
                'NAFLD (F█ M▄)'
            ],
            'Medium Frequency / Low Mortality (F▄ M▂)': [
                'Celiac Disease (F▄ M▂)',
                'Malabsorption and nutrition (F▄ M▂)',
                'Colorectal cancer screening (F▄ M▂)',
                'Liver fibrosis (F▄ M▂)'
            ],
            'Medium Frequency / Medium Mortality (F▄ M▄)': [
                'Viral Hepatitis (F▄ M▄)',
                'Hepatitis B (F▄ M▄)',
                'Hepatitis C (F▄ M▄)',
                'Autoimmune Liver disease (F▄ M▄)',
                'Recurrent and chronic pancreatitis (F▄ M▄)'
            ],
            'Low Frequency / Low Mortality (F▂ M▂)': [
                'Esophageal motility and structural disorders (F▂ M▂)',
                'Hereditary Gastrointestinal polyposis (F▂ M▂)'
            ],
            'Low Frequency / Medium Mortality (F▂ M▄)': [
                'Eosinophilic gastritis and esophagitis (F▂ M▄)',
                'Alcohol associated Hepatitis (F▂ M▄)',
                'HIV (F▂ M▄)'
            ],
            'Low Frequency / High Mortality (F▂ M█)': [
                'Esophageal Cancer (F▂ M█)',
                'Pancreatic cancer (F▂ M█)',
                'Hepatocellular carcinoma (F▂ M█)',
                'Cholangiocarciona (F▂ M█)',
                'Liver transplant (F▂ M█)'
            ]
        },
        'Emergency Room': {
            'High Frequency / High Mortality (F█ M█)': [
                'GI Hemorrahage (F█ M█)',
                'Acute pancreatitis (F█ M█)'
            ],
            'High Frequency / Medium Mortality (F█ M▄)': [
                'Infective gastroenteritis (F█ M▄)'
            ],
            'Medium Frequency / High Mortality (F▄ M█)': [
                'Clostridioides dificile (F▄ M█)',
                'Ischaemic bowel disease (F▄ M█)'
            ],
            'Low Frequency / High Mortality (F▂ M█)': [
                'Hepatic decompensation (F▂ M█)'
            ],
            'Low Frequency / Medium Mortality (F▂ M▄)': [
                'GI and Hepatic toxicity (F▂ M▄)'
            ]
        },
        'Hospitalization': {
            'High Frequency / High Mortality (F█ M█)': [
                'Severe GI bleeding requiring intervention (F█ M█)',
                'Acute liver failure (F█ M█)'
            ],
            'Medium Frequency / High Mortality (F▄ M█)': [
                'Severe acute pancreatitis with complications (F▄ M█)',
                'Advanced liver disease with decompensation (F▄ M█)'
            ],
            'Low Frequency / High Mortality (F▂ M█)': [
                'Liver transplant complications (F▂ M█)',
                'GI malignancy complications (F▂ M█)'
            ],
            'Low Frequency / Medium Mortality (F▂ M▄)': [
                'Complicated inflammatory bowel disease (F▂ M▄)',
                'Severe Clostridioides difficile colitis (F▂ M▄)'
            ]
        }
    }
}

# Generate Gastroenterology navigation
nav_json = create_navigation_json('gastroenterology', gastroenterology_data)
with open('assets/data/navigation-menu-gastroenterology.json', 'w', encoding='utf-8') as f:
    json.dump(nav_json, f, indent=2, ensure_ascii=False)

# Count topics
total = sum(len(topics) for setting in gastroenterology_data['topics'].values() for topics in setting.values())
print(f'Generated navigation-menu-gastroenterology.json with {total} topics')