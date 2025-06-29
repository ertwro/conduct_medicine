#!/usr/bin/env python3
"""
Script to generate complete navigation JSON files for all medical specialties
based on their Index.md files.
"""

import json
import re
import os

# Specialty data extracted from Index.md files
SPECIALTY_DATA = {
    'cardiology': {
        'display_en': 'Cardiology',
        'display_es': 'Cardiología',
        'topics': {
            'Outpatient Setting': {
                'High Frequency / Low Mortality (F█ M▂)': [
                    'Hypertension (F█ M▂)',
                    'Life style recommendations and prevention (F█ M▂)',
                    'Lipids (F█ M▂)',
                    'Management of ischemic heart disease (F█ M▂)'
                ],
                'High Frequency / Medium Mortality (F█ M▄)': [
                    'Treatment of HFrEF (F█ M▄)',
                    'Treatment of HFpEF (F█ M▄)',
                    'Atrial fibrillation and atrial flutter (F█ M▄)'
                ],
                'Medium Frequency / Low Mortality (F▄ M▂)': [
                    'Syncope (F▄ M▂)',
                    'Diabetes (F▄ M▂)',
                    'Medical management of obesity (F▄ M▂)',
                    'Echocardiography (F▄ M▂)',
                    'Nuclear cardiology and PET imaging (F▄ M▂)',
                    'Perioperative risk stratification (F▄ M▂)'
                ],
                'Medium Frequency / Medium Mortality (F▄ M▄)': [
                    'Hypertrophic cardiomyopathy (F▄ M▄)',
                    'Adult congenital Heart disease (F▄ M▄)',
                    'Pregnancy and cardiovascular disease (F▄ M▄)',
                    'Common supraventricular tachycardias (F▄ M▄)',
                    'Bradycardia and AV block (F▄ M▄)'
                ],
                'Low Frequency / Low Mortality (F▂ M▂)': [
                    'Cardiac CT imaging (F▂ M▂)',
                    'Cardiac magnetic resonance (F▂ M▂)'
                ],
                'Low Frequency / Medium Mortality (F▂ M▄)': [
                    'Other cardiomyopathies (F▂ M▄)',
                    'Cardiac amyloidosis (F▂ M▄)',
                    'Cardiac sarcoidosis (F▂ M▄)',
                    'Cardio-oncology (F▂ M▄)',
                    'Pace makers (including CRT) (F▂ M▄)',
                    'ICD therapy (F▂ M▄)'
                ],
                'Low Frequency / High Mortality (F▂ M█)': [
                    'Assessment and Treatment of pulmonary hypertension (F▂ M█)',
                    'Heart transplantation (F▂ M█)'
                ]
            },
            'Emergency Room': {
                'High Frequency / High Mortality (F█ M█)': [
                    'Management of ST elevation MI patients (F█ M█)',
                    'Non-ST Elevation acute syndromes (F█ M█)'
                ],
                'Medium Frequency / High Mortality (F▄ M█)': [
                    'Acute aortic syndromes (F▄ M█)',
                    'Pulmonary embolism (F▄ M█)'
                ],
                'Medium Frequency / Medium Mortality (F▄ M▄)': [
                    'Ventricular tachycardia (F▄ M▄)'
                ],
                'Low Frequency / Medium Mortality (F▂ M▄)': [
                    'Deep venous thrombosis (F▂ M▄)',
                    'Pericardial disease (F▂ M▄)'
                ]
            },
            'Hospitalization': {
                'High Frequency / High Mortality (F█ M█)': [
                    'Critical care cardiology (F█ M█)',
                    'Mechanical circulatory support (F█ M█)'
                ],
                'Medium Frequency / High Mortality (F▄ M█)': [
                    'Infective endocarditis (F▄ M█)'
                ],
                'Low Frequency / High Mortality (F▂ M█)': [
                    'Aortic aneurysms and Aortitis (F▂ M█)'
                ],
                'Low Frequency / Medium Mortality (F▂ M▄)': [
                    'Management of aortic valve disease (F▂ M▄)',
                    'Management of tricuspid and pulmonic valve disease for the boards (F▂ M▄)',
                    'Management considerations for prosthetic heart valves (F▂ M▄)',
                    'Peripheral heart disease (F▂ M▄)',
                    'Carotid artery disease (F▂ M▄)',
                    'Renovascular and mesenteric heart disease (F▂ M▄)'
                ]
            }
        }
    },
    'gastroenterology': {
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
}

def clean_topic_name(topic):
    """Extract clean topic name and indicators from full topic string."""
    topic_clean = re.sub(r' \([FM][█▄▂] [FM][█▄▂]\)', '', topic)
    indicators = re.search(r'(\([FM][█▄▂] [FM][█▄▂]\))', topic)
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
                        'es': f'{topic_clean} {indicators_str}'.strip()  # For now, keeping English labels
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

# Generate navigation files
if __name__ == '__main__':
    output_dir = 'assets/data'
    
    for specialty_key, specialty_data in SPECIALTY_DATA.items():
        nav_json = create_navigation_json(specialty_key, specialty_data)
        filename = f'{output_dir}/navigation-menu-{specialty_key}.json'
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(nav_json, f, indent=2, ensure_ascii=False)
        
        topic_count = count_topics(specialty_data['topics'])
        print(f'Generated {filename} with {topic_count} topics')