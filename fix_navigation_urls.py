#!/usr/bin/env python3

import json
import glob
import os
import re

def fix_navigation_urls():
    """Fix all .html URLs in navigation files to use SPA routing."""
    
    print("🔧 Fixing navigation URLs from .html to SPA routes...")
    
    nav_files = glob.glob("assets/data/navigation-menu-*.json") + glob.glob("public/assets/data/navigation-menu-*.json")
    
    fixed_count = 0
    
    for file_path in nav_files:
        # Skip index file
        if "navigation-menu-index.json" in file_path:
            continue
            
        # Extract specialty name from filename
        filename = os.path.basename(file_path)
        specialty_name = filename.replace("navigation-menu-", "").replace(".json", "")
        
        print(f"Fixing {file_path} for specialty: {specialty_name}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Fix URLs in the navigation data
            urls_fixed = fix_urls_in_data(data, specialty_name)
            
            if urls_fixed > 0:
                # Write back the fixed data
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                
                print(f"✅ Fixed {urls_fixed} URLs in {file_path}")
                fixed_count += 1
            else:
                print(f"ℹ️  No URLs to fix in {file_path}")
                
        except Exception as e:
            print(f"❌ Error fixing {file_path}: {e}")
    
    print(f"\n✅ Fixed URLs in {fixed_count} navigation files")

def fix_urls_in_data(data, specialty_name):
    """Recursively fix URLs in navigation data structure."""
    
    urls_fixed = 0
    
    def fix_url(url_string):
        """Convert .html URL to SPA route."""
        if url_string.endswith('.html'):
            # Remove .html extension and create SPA route
            page_name = url_string.replace('.html', '')
            return f"/specialty/{specialty_name}/{page_name}"
        return url_string
    
    def process_item(item):
        nonlocal urls_fixed
        
        if isinstance(item, dict):
            # Fix URL in current item
            if 'url' in item and isinstance(item['url'], str):
                old_url = item['url']
                new_url = fix_url(old_url)
                if old_url != new_url:
                    item['url'] = new_url
                    urls_fixed += 1
                    print(f"   {old_url} → {new_url}")
            
            # Process subItems recursively
            if 'subItems' in item and isinstance(item['subItems'], list):
                for sub_item in item['subItems']:
                    process_item(sub_item)
            
            # Process items recursively  
            if 'items' in item and isinstance(item['items'], list):
                for sub_item in item['items']:
                    process_item(sub_item)
        
        elif isinstance(item, list):
            for sub_item in item:
                process_item(sub_item)
    
    # Process all sections
    if 'sections' in data:
        process_item(data['sections'])
    else:
        process_item(data)
    
    return urls_fixed

if __name__ == "__main__":
    fix_navigation_urls()