import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

src = './public/projects/nyan_cat_vision_collage.jpg'
dest = './public/projects/nyan_cat_vision_horizontal.jpg'

img = Image.open(src)
w, h = img.size

# Assuming a relatively symmetrical 2x2 grid with small white borders.
w2 = w // 2
h2 = h // 2

# Cut into 4 pieces
q1 = img.crop((0, 0, w2, h2))
q2 = img.crop((w2, 0, w, h2))
q3 = img.crop((0, h2, w2, h))
q4 = img.crop((w2, h2, w, h))

# Paste into a 4x1 horizontal strip
new_img = Image.new('RGB', (w2 * 4, h2), (255, 255, 255))
new_img.paste(q1, (0, 0))
new_img.paste(q2, (w2, 0))
new_img.paste(q3, (w2 * 2, 0))
new_img.paste(q4, (w2 * 3, 0))

# Save
new_img.save(dest, quality=95)
print("Saved horizontal collage to", dest)
