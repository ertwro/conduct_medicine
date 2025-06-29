#!/usr/bin/env python3

import json
import glob
import os

def generate_comprehensive_search_data():
    """Generate search data from navigation files for all specialties and topics."""
    
    search_entries = [
        {
            "title": "Conduct Based Medicine - Home",
            "url": "/",
            "description": "Advanced medical education platform with evidence-based clinical decision support for healthcare professionals.",
            "keywords": "medical education, clinical decision support, conduct based medicine, neurology, dermatology, cardiology, internal medicine"
        }
    ]
    
    # Specialty name mappings
    specialty_names = {
        'allergy_immunology': {'en': 'Allergy & Immunology', 'es': 'Alergia e Inmunología'},
        'cardiology': {'en': 'Cardiology', 'es': 'Cardiología'},
        'dermatology': {'en': 'Dermatology', 'es': 'Dermatología'},
        'endocrinology': {'en': 'Endocrinology', 'es': 'Endocrinología'},
        'gastroenterology': {'en': 'Gastroenterology', 'es': 'Gastroenterología'},
        'gynecology': {'en': 'Gynecology', 'es': 'Ginecología'},
        'hematology': {'en': 'Hematology', 'es': 'Hematología'},
        'infectious_disease': {'en': 'Infectious Disease', 'es': 'Enfermedades Infecciosas'},
        'internal_medicine': {'en': 'Internal Medicine', 'es': 'Medicina Interna'},
        'nephrology': {'en': 'Nephrology', 'es': 'Nefrología'},
        'neurology': {'en': 'Neurology', 'es': 'Neurología'},
        'pediatrics': {'en': 'Pediatrics', 'es': 'Pediatría'},
        'physical_medicine': {'en': 'Physical Medicine & Rehabilitation', 'es': 'Medicina Física y Rehabilitación'},
        'psychiatry': {'en': 'Psychiatry', 'es': 'Psiquiatría'},
        'pulmonology': {'en': 'Pulmonology', 'es': 'Neumología'},
        'rheumatology': {'en': 'Rheumatology', 'es': 'Reumatología'},
        'urology': {'en': 'Urology', 'es': 'Urología'}
    }
    
    # Specialty descriptions for search
    specialty_descriptions = {
        'allergy_immunology': "Allergic diseases and primary immunodeficiency disorders.",
        'cardiology': "Cardiovascular diseases and heart conditions with evidence-based frequency and mortality indicators.",
        'dermatology': "Dermatological conditions with diagnostic and treatment guidelines organized by clinical setting.",
        'endocrinology': "Hormone-related disorders including diabetes, thyroid, and metabolic conditions.",
        'gastroenterology': "Digestive system disorders and hepatology with evidence-based management approaches.",
        'gynecology': "Women's reproductive health and gynecologic conditions.",
        'hematology': "Blood disorders, hematologic malignancies, and coagulation management.",
        'infectious_disease': "Comprehensive infectious disease management and antimicrobial stewardship.",
        'internal_medicine': "Comprehensive adult medical care covering a wide range of internal medicine conditions.",
        'nephrology': "Kidney diseases, dialysis, and renal replacement therapy management.",
        'neurology': "Comprehensive neurological conditions organized by clinical setting and frequency of consultation.",
        'pediatrics': "Comprehensive pediatric care across all age groups and clinical settings.",
        'physical_medicine': "Rehabilitation medicine and functional restoration.",
        'psychiatry': "Mental health disorders with evidence-based psychiatric treatment approaches.",
        'pulmonology': "Respiratory medicine focusing on lung diseases and critical care pulmonology.",
        'rheumatology': "Autoimmune and inflammatory joint diseases with systemic manifestations.",
        'urology': "Urologic conditions and male reproductive health management."
    }
    
    # Add main specialty entries
    for specialty_key, names in specialty_names.items():
        specialty_entry = {
            "title": f"{names['en']} Specialty",
            "url": f"/specialty/{specialty_key}",
            "description": specialty_descriptions.get(specialty_key, f"{names['en']} medical specialty."),
            "keywords": f"{names['en'].lower()}, {specialty_key}, medical specialty"
        }
        search_entries.append(specialty_entry)
    
    # Parse navigation files to extract individual medical topics
    print("📋 Processing navigation files for individual topics...")
    topic_count = 0
    
    # Find all navigation files
    nav_files = glob.glob("public/assets/data/navigation-menu-*.json")
    
    for nav_file in nav_files:
        # Skip index file
        if "navigation-menu-index.json" in nav_file:
            continue
            
        # Extract specialty from filename
        specialty_key = os.path.basename(nav_file).replace("navigation-menu-", "").replace(".json", "")
        
        if specialty_key not in specialty_names:
            continue
            
        specialty_display = specialty_names[specialty_key]['en']
        
        try:
            with open(nav_file, 'r', encoding='utf-8') as f:
                nav_data = json.load(f)
            
            if 'sections' not in nav_data:
                continue
                
            for section in nav_data['sections']:
                if 'items' not in section:
                    continue
                    
                # Process items and sub-items
                def process_items(items, setting=""):
                    nonlocal topic_count
                    
                    for item in items:
                        if 'label' in item and isinstance(item['label'], dict):
                            topic_en = item['label'].get('en', '')
                            
                            if topic_en and not any(skip in topic_en.lower() for skip in ['home', 'setting', 'consulta', 'inicio']):
                                # Clean topic name (remove indicators like F█ M▂)
                                import re
                                clean_topic = re.sub(r'\s*\([FM][█▄▂]\s*[FM][█▄▂]\)', '', topic_en)
                                clean_topic = re.sub(r'\s*[FM][█▄▂]', '', clean_topic).strip()
                                
                                if clean_topic:
                                    # Generate URL slug
                                    url_slug = re.sub(r'[^a-zA-Z0-9\s]', '', clean_topic)
                                    url_slug = re.sub(r'\s+', '-', url_slug.strip()).lower()
                                    
                                    # Generate keywords
                                    keywords = [clean_topic.lower(), specialty_key, specialty_display.lower()]
                                    if setting:
                                        keywords.append(setting.lower())
                                    
                                    # Add individual words from topic name
                                    words = re.findall(r'\b\w{3,}\b', clean_topic.lower())
                                    keywords.extend(words)
                                    
                                    # Remove duplicates and join
                                    keywords = list(set(keywords))
                                    
                                    topic_entry = {
                                        "title": clean_topic,
                                        "url": f"/specialty/{specialty_key}/{url_slug}",
                                        "description": f"{clean_topic} - {specialty_display} clinical information, diagnosis, and management guidelines.",
                                        "keywords": ", ".join(keywords)
                                    }
                                    
                                    search_entries.append(topic_entry)
                                    topic_count += 1
                        
                        # Process sub-items if they exist
                        if 'subItems' in item and isinstance(item['subItems'], list):
                            # Extract setting from parent label
                            parent_setting = ""
                            if 'label' in item and isinstance(item['label'], dict):
                                parent_setting = item['label'].get('en', '')
                            process_items(item['subItems'], parent_setting)
                
                process_items(section['items'])
                
        except Exception as e:
            print(f"⚠️ Error processing {nav_file}: {e}")
            continue
    
    print(f"📊 Added {topic_count} individual medical topics from navigation files")
    
    print(f"Generated {len(search_entries)} search entries")
    return search_entries

def write_search_data(search_entries):
    """Write search data to JavaScript file."""
    
    js_content = "const sitePages = " + json.dumps(search_entries, indent=4) + ";\n"
    
    # Write to public directory
    for path in ["public/assets/js/search-data.js"]:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"✅ Updated {path}")

if __name__ == "__main__":
    print("🔍 Generating comprehensive search data...")
    search_entries = generate_comprehensive_search_data()
    write_search_data(search_entries)
    print("✅ Search data generation complete")