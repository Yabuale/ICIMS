import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
from deepface import DeepFace


def check_img(img1,img2):
    print(img1)
    print(img2)
    result = DeepFace.verify(img1, img2,enforce_detection=False)
    print(result)
    
