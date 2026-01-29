
from PIL import Image
import collections

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.resize((150, 150))
        result = img.quantize(colors=1)
        palette = result.getpalette()
        color = palette[:3]
        return '#%02x%02x%02x' % (color[0], color[1], color[2])
    except Exception as e:
        return str(e)

print(get_dominant_color('assets/images/logo.png'))
