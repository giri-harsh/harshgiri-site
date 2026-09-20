---
id: yolo
src: YOLOv11 OCR
title: Text extraction with YOLOv11 and OCR
tags: yolo yolov11 ocr tesseract opencv vision document intelligence detection extraction computer vision
---
Harsh engineered a two-stage document intelligence pipeline fusing YOLOv11 detection with Tesseract OCR, fine-tuned on 8,000+ annotated images to reach mAP@0.5 of 91.3% at about 95 ms per image. An OpenCV preprocessing pipeline (grayscale, adaptive thresholding, binarization) boosted OCR accuracy by 28%, enabling 650+ documents per minute with structured JSON output for downstream ETL. Mixed-precision training and transfer learning cut training convergence by 35% while keeping over 90% precision on unseen layouts.
