#!/usr/bin/env python3

import json
import os
import glob

def get_specialty_names():
    """Map specialty folder names to proper display names."""
    return {
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

def fix_navigation_file(file_path, specialty_name):
    """Fix 'Unknown Specialty' text in a navigation JSON file."""
    print(f"Fixing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Get proper specialty names
        specialty_names = get_specialty_names()
        if specialty_name not in specialty_names:
            print(f"Warning: No name mapping for specialty '{specialty_name}'")
            return False
            
        en_name = specialty_names[specialty_name]['en']
        es_name = specialty_names[specialty_name]['es']
        
        # Fix UI strings
        if 'ui_strings' in data:
            if 'en' in data['ui_strings']:
                if 'charcotImageTitle' in data['ui_strings']['en']:
                    data['ui_strings']['en']['charcotImageTitle'] = f"Learn more about {en_name}"
                if 'charcotImageAlt' in data['ui_strings']['en']:
                    data['ui_strings']['en']['charcotImageAlt'] = en_name
                if 'navUnavailableMsg' in data['ui_strings']['en']:
                    data['ui_strings']['en']['navUnavailableMsg'] = f"{en_name} navigation menu is currently unavailable."
            
            if 'es' in data['ui_strings']:
                if 'charcotImageTitle' in data['ui_strings']['es']:
                    data['ui_strings']['es']['charcotImageTitle'] = f"Aprender más sobre {es_name}"
                if 'charcotImageAlt' in data['ui_strings']['es']:
                    data['ui_strings']['es']['charcotImageAlt'] = es_name
                if 'navUnavailableMsg' in data['ui_strings']['es']:
                    data['ui_strings']['es']['navUnavailableMsg'] = f"El menú de navegación de {es_name.lower()} no está disponible actualmente."
        
        # Fix section titles that contain "Unknown Specialty"
        if 'sections' in data and isinstance(data['sections'], list):
            for section in data['sections']:
                if 'title' in section and isinstance(section['title'], dict):
                    if section['title'].get('en') == "Unknown Specialty":
                        section['title']['en'] = en_name
                    if section['title'].get('es') == "Unknown Specialty":
                        section['title']['es'] = es_name
                
                # Fix Home button URLs from index.html to / for SPA routing
                if 'items' in section and isinstance(section['items'], list):
                    for item in section['items']:
                        if (isinstance(item.get('label'), dict) and 
                            item['label'].get('en') == "Home" and 
                            item.get('url') == "index.html"):
                            item['url'] = "/"
        
        # Write back the fixed data
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Fixed {specialty_name} - {en_name}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all navigation files with 'Unknown Specialty' text."""
    print("🔧 Fixing 'Unknown Specialty' text in navigation files...")
    
    # Find all navigation JSON files in both directories
    nav_files = glob.glob("assets/data/navigation-menu-*.json") + glob.glob("public/assets/data/navigation-menu-*.json")
    
    fixed_count = 0
    
    for file_path in nav_files:
        # Extract specialty name from filename
        filename = os.path.basename(file_path)
        if filename == "navigation-menu-index.json":
            continue  # Skip the index file
            
        specialty_name = filename.replace("navigation-menu-", "").replace(".json", "")
        
        if fix_navigation_file(file_path, specialty_name):
            fixed_count += 1
    
    print(f"\n✅ Fixed {fixed_count} navigation files")

if __name__ == "__main__":
    main()