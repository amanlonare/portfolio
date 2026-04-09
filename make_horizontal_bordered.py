import sys
import subprocess

try:
    from PIL import Image, ImageChops
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

src = './public/projects/nyan_cat_vision_collage.jpg'
dest = './public/projects/nyan_cat_vision_horizontal.jpg'

img = Image.open(src).convert('RGB')
w, h = img.size

w2 = w // 2
h2 = h // 2

# Cut into 4 rough pieces
q1 = img.crop((0, 0, w2, h2))
q2 = img.crop((w2, 0, w, h2))
q3 = img.crop((0, h2, w2, h))
q4 = img.crop((w2, h2, w, h))

def auto_crop_borders(im):
    # Create white background to find the difference
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    
    # Increase the threshold for the difference so very faint off-white gets ignored
    diff = ImageChops.add(diff, diff, 2.0, -50)
    
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

# Remove any uneven baked-in white borders from the original image
q1 = auto_crop_borders(q1)
q2 = auto_crop_borders(q2)
q3 = auto_crop_borders(q3)
q4 = auto_crop_borders(q4)

# Resize them to match the exact same size so the separators are completely uniform
from PIL import Image
target_w = max(q1.size[0], q2.size[0], q3.size[0], q4.size[0])
target_h = max(q1.size[1], q2.size[1], q3.size[1], q4.size[1])

if hasattr(Image, 'Resampling'):
    resample = Image.Resampling.LANCZOS
else:
    resample = Image.ANTIALIAS

q1 = q1.resize((target_w, target_h), resample)
q2 = q2.resize((target_w, target_h), resample)
q3 = q3.resize((target_w, target_h), resample)
q4 = q4.resize((target_w, target_h), resample)

separator_width = 15
border_width = 15

final_w = (target_w * 4) + (separator_width * 3) + (border_width * 2)
final_h = target_h + (border_width * 2)

new_img = Image.new('RGB', (final_w, final_h), (255, 255, 255))

x_offset = border_width
y_offset = border_width

new_img.paste(q1, (x_offset, y_offset))
x_offset += target_w + separator_width
new_img.paste(q2, (x_offset, y_offset))
x_offset += target_w + separator_width
new_img.paste(q3, (x_offset, y_offset))
x_offset += target_w + separator_width
new_img.paste(q4, (x_offset, y_offset))

new_img.save(dest, quality=95)
print("Saved cleanly cropped and uniformly bordered horizontal collage to", dest)
