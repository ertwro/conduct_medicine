#!/usr/bin/env python3
"""Debug script to understand parsing issues"""

import re
from pathlib import Path

def debug_parse_index(file_path):
    """Debug version of parse_index_md"""
    print(f"\n=== DEBUG: Parsing {file_path} ===")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"File length: {len(content)} characters")
    
    # Show the structure around section headers
    print("\nAll lines starting with ##:")
    for i, line in enumerate(content.split('\n')):
        if line.startswith('##'):
            print(f"Line {i+1}: {repr(line)}")
    
    # Check sections
    sections = re.findall(r'^## (.+)$', content, re.MULTILINE)
    print(f"Found sections: {sections}")
    
    # Show lines around first section
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if line.startswith('## Outpatient'):
            print(f"\nContext around line {i+1}:")
            start = max(0, i-2)
            end = min(len(lines), i+10)
            for j in range(start, end):
                marker = ">>>" if j == i else "   "
                print(f"{marker} {j+1:3d}: {repr(lines[j])}")
            break
    
    # Check one section in detail
    if sections:
        section = sections[0]  # First section
        print(f"\nAnalyzing section: '{section}'")
        
        section_pattern = f'^## {re.escape(section)}$(.*?)(?=^##|$)'
        section_match = re.search(section_pattern, content, re.MULTILINE | re.DOTALL)
        
        if section_match:
            section_content = section_match.group(1)
            print(f"Section content length: {len(section_content)}")
            print("First 200 chars of section content:")
            print(repr(section_content[:200]))
            
            # Check subsections
            subsections = re.findall(r'^### (.+)$', section_content, re.MULTILINE)
            print(f"Found subsections: {subsections}")
            
            if subsections:
                subsection = subsections[0]
                print(f"\nAnalyzing subsection: '{subsection}'")
                
                subsection_pattern = f'^### {re.escape(subsection)}$(.*?)(?=^###|^##|$)'
                subsection_match = re.search(subsection_pattern, section_content, re.MULTILINE | re.DOTALL)
                
                if subsection_match:
                    subsection_content = subsection_match.group(1)
                    print(f"Subsection content length: {len(subsection_content)}")
                    print("Subsection content:")
                    print(repr(subsection_content))
                    
                    # Try to find items
                    items = re.findall(r'^- (?:\[(.+?)\]|(.+))$', subsection_content, re.MULTILINE)
                    print(f"Found items: {items}")
                    
                    # Try simpler pattern
                    simple_items = re.findall(r'^- (.+)$', subsection_content, re.MULTILINE)
                    print(f"Simple pattern items: {simple_items}")

# Test with hematology
debug_parse_index(Path('experimental/specialties/Hematology/Index.md'))