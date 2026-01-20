#!/usr/bin/env python3
"""
Split the ABEL products composite image into three individual product images.
"""

from PIL import Image
import sys
import os

def split_product_image(input_path, output_dir=None):
    """
    Split a composite image of 3 products into individual images.
    
    Layout expected:
    - Top half: Single product (Longevity Complex)
    - Bottom half: Two products side by side (Resveratrol left, Omega 3 right)
    """
    
    # Load the image
    img = Image.open(input_path)
    width, height = img.size
    print(f"Original image size: {width}x{height}")
    
    # Set output directory
    if output_dir is None:
        output_dir = os.path.dirname(input_path) or '.'
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Calculate crop regions based on the image layout
    # Top product takes roughly top 47% of the image
    top_split = int(height * 0.47)
    
    # Bottom products are side by side
    mid_x = width // 2
    
    # Crop regions (left, upper, right, lower)
    crops = [
        {
            'name': 'longevity_complex',
            'box': (0, 0, width, top_split),
            'description': 'ABEL Longevity Complex'
        },
        {
            'name': 'resveratrol',
            'box': (0, top_split, mid_x, height),
            'description': 'ABEL Essential Resveratrol'
        },
        {
            'name': 'omega3',
            'box': (mid_x, top_split, width, height),
            'description': 'ABEL Omega 3'
        }
    ]
    
    # Crop and save each product
    saved_files = []
    for i, crop_info in enumerate(crops, 1):
        cropped = img.crop(crop_info['box'])
        
        # Generate output filename
        base_name = os.path.splitext(os.path.basename(input_path))[0]
        output_filename = f"{crop_info['name']}.png"
        output_path = os.path.join(output_dir, output_filename)
        
        # Save the cropped image
        cropped.save(output_path, 'PNG')
        saved_files.append(output_path)
        
        print(f"✓ Image {i}/3: {crop_info['description']}")
        print(f"  Saved to: {output_path}")
        print(f"  Size: {cropped.size[0]}x{cropped.size[1]}")
        print()
    
    return saved_files

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python split_products.py <input_image> [output_directory]")
        print("\nExample:")
        print("  python split_products.py products.png ./assets/products/")
        sys.exit(1)
    
    input_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else './assets/products'
    
    if not os.path.exists(input_path):
        print(f"Error: Input file not found: {input_path}")
        sys.exit(1)
    
    print(f"\nSplitting image: {input_path}")
    print(f"Output directory: {output_dir}\n")
    
    split_product_image(input_path, output_dir)
    print("Done! ✓")
