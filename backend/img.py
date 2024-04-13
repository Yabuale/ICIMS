import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
from deepface import DeepFace


# Function to load all images from the photos folder
def load_images_from_folder(folder):
    images = []
    for filename in os.listdir(folder):
        print(filename)
        images.append(os.path.join(folder, filename))
    return images

# Load images from the photos folder
photos_folder = 'photos'
images = load_images_from_folder(photos_folder)


# Load the single photo
test_image = 'z.jpg'

# Perform face recognition
match_found = False

# Perform face recognition for each image in the folder
best_match_score = float('inf')  # Initialize to infinity
best_match_image = None
for image_path in images:
    result = DeepFace.verify(image_path, test_image,enforce_detection=False)
    similarity_score = result["distance"]
    print("\n",result)
    print(f"Image: {image_path}, Similarity score: {similarity_score}")

    # Check if this image has a better similarity score than the current best match
    if similarity_score < best_match_score and similarity_score < 0.5:
        best_match_score = similarity_score
        best_match_image = image_path

# If a match is found and similarity score is below 0.5, print the best match image and similarity score
if best_match_image:
    print("\nBest match found:")
    print("Image:", best_match_image)
    print("Similarity score:", best_match_score)
else:
    print("No match found.")
