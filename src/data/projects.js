import { FileText, Brain, Hand } from "lucide-react";

export const projects = [
  {
    slug: "khadamni",
    icon: FileText,
    name: "KHADAMNI",
    desc: "CV-to-job compatibility engine",
    summary:
      "A full-stack platform that checks the compatibility of a candidate's CV against a job offer using spaCy-based skill extraction and cosine similarity.",
    details:
      "KHADAMNI compares a candidate's CV against a job description and returns a compatibility score, broken down into skills, experience, and education. CVs are parsed and matched using spaCy's PhraseMatcher, with scoring based on cosine similarity between extracted skill vectors. The app includes JWT authentication, profile management, email verification, and job suggestions pulled live from the Himalayas API. A glassmorphism React frontend sits on top of a FastAPI backend with a MySQL database.",
    stack: ["React", "Tailwind CSS", "FastAPI", "MySQL", "spaCy", "scikit-learn"],
    role: "Final-year project (PFE), full-stack developer",
    link: "https://github.com/aziz23-11/khadamni",
    demoLink: "",
    screenshots: [
      { src: "/projects/khadamni/landing.jpeg", alt: "landing page" },
      { src: "/projects/khadamni/score.jpeg", alt: "score page" },
      { src: "/projects/khadamni/feedback.jpeg", alt: "feedback part" },
      { src: "/projects/khadamni/profile.jpeg", alt: "profile page + job suggestion" },
      { src: "/projects/khadamni/login.jpeg", alt: "login + signUp page" },
    ],
  },
  {
    slug: "alzheimer-mri",
    icon: Brain,
    name: "Alzheimer MRI detection",
    desc: "MRI-based detection model",
    summary:
      "An image classification model that detects signs of Alzheimer's disease from brain MRI scans.",
    details:
      "This project trains a neural network to classify brain MRI scans into stages of dimensia's disease progression , the model is trained on an augmented Kaggle dataset (uraninjo/augmented-alzheimer-mri-dataset-v2) inside Google Colab. The pipeline covers data augmentation, class balancing, fine-tuning, and evaluation with confusion matrices and per-class accuracy.",
    stack: ["Python", "PyTorch", "EfficientNetB0", "Google Colab", "Kaggle"],
    role: "Independent research project",
    link: "https://github.com/aziz23-11/Dimentia-MRI-Scan",
    demoLink: "",
    screenshots: [
      { src: "/projects/alzheimer-mri/analyse2.jpeg", alt: "Confusion matrix" },
      { src: "/projects/alzheimer-mri/analyse1.jpeg", alt: "Training accuracy curve" },
      { src: "/projects/alzheimer-mri/landing.jpeg", alt: "landing page" },
      { src: "/projects/alzheimer-mri/upload.jpeg", alt: "uploading file" },
      { src: "/projects/alzheimer-mri/res.jpeg", alt: "results" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
