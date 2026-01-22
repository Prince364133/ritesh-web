
from PIL import Image
import collections

def get_colors(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        img = img.resize((150, 150))
        
        # Get colors excluding transparent ones
        colors = []
        for count, color in img.getcolors(img.size[0] * img.size[1]):
            # color is (r, g, b, a)
            if color[3] > 10: # If not transparent
                colors.append((count, color[:3]))
        
        # Sort by count
        colors.sort(key=lambda x: x[0], reverse=True)
        
        top_colors = []
        for i in range(min(5, len(colors))):
            c = colors[i][1]
            hex_c = '#%02x%02x%02x' % (c[0], c[1], c[2])
            top_colors.append(hex_c)
            
        return top_colors
    except Exception as e:
        return str(e)

print(get_colors('assets/images/logo.png'))
