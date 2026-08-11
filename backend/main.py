from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY) if GROQ_API_KEY else None

app = FastAPI(
    title="Faizan AI Portfolio API",
    version="4.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "https://faizan-ai-portfolio.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


PROFILE = {
    "name": "Faizan Khan",
    "education": "B.Tech Information Technology",
    "university": "Dr. Ram Manohar Lohia Avadh University",
    "year": "2nd Year",
    "semester": "5th Semester",
    "cgpa": "8.1",
    "graduation": "2028",
    "status": "Fresher",
    "email": "faijankha7860@gmail.com",
    "github": "https://github.com/faizankhan07867",
    "linkedin": "https://www.linkedin.com/in/faizankhan0786",
}


SKILLS = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "SQL",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Data Science",
    "Computer Vision",
    "OpenCV",
    "Git",
    "GitHub",
    "FastAPI",
]


PROJECTS = [
    {
        "id": 1,
        "title": "Parkinson's Disease Prediction",
        "category": "Machine Learning",
        "icon": "🧠",
        "description": "Machine learning project for Parkinson's disease prediction.",
        "technologies": [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn"
        ],
        "github": "https://github.com/faizankhan07867/Parkinson-s-Disease-Prediction",
    },

    {
        "id": 2,
        "title": "AI Virtual Mouse",
        "category": "Computer Vision",
        "icon": "🖱️",
        "description": "AI-powered virtual mouse using hand gesture recognition.",
        "technologies": [
            "Python",
            "OpenCV",
            "MediaPipe",
            "Computer Vision"
        ],
        "github": "https://github.com/faizankhan07867/AI-Virtual-Mouse",
    },

    {
        "id": 3,
        "title": "Stock Price Prediction using LSTM",
        "category": "Deep Learning",
        "icon": "📈",
        "description": "LSTM-based deep learning project for stock price prediction.",
        "technologies": [
            "Python",
            "TensorFlow",
            "Keras",
            "LSTM"
        ],
        "github": "https://github.com/faizankhan07867/Stock-Price-Prediction-using-LSTM",
    },

    {
        "id": 4,
        "title": "Credit Card Fraud Detection",
        "category": "Data Science",
        "icon": "💳",
        "description": "Machine learning system for detecting potentially fraudulent transactions.",
        "technologies": [
            "Python",
            "Pandas",
            "Scikit-learn"
        ],
        "github": "https://github.com/faizankhan07867/Credit-Card-Fraud-Detection",
    },

    {
        "id": 5,
        "title": "Traffic Prediction System",
        "category": "Machine Learning",
        "icon": "🚦",
        "description": "Machine learning project for traffic prediction and congestion analysis.",
        "technologies": [
            "Python",
            "Pandas",
            "Scikit-learn"
        ],
        "github": "https://github.com/faizankhan07867/Traffic-Prediction-System",
    },

    {
        "id": 6,
        "title": "Brain Tumor Detection using CNN",
        "category": "Deep Learning",
        "icon": "🧬",
        "description": "CNN-based deep learning project for brain tumor detection from MRI images.",
        "technologies": [
            "Python",
            "TensorFlow",
            "Keras",
            "CNN"
        ],
        "github": "https://github.com/faizankhan07867/Brain-Tumor-Detection-using-CNN",
    },

    {
        "id": 7,
        "title": "Mood-Based Learning Website",
        "category": "Web Development",
        "icon": "🌐",
        "description": "Interactive web project designed around mood-based learning.",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "github": "https://github.com/faizankhan07867/Mood-Based-Learning-Website_",
    },
]


EXPERIENCE = [
    {
        "role": "Data Science Intern",
        "company": "CodeAlpha",
        "status": "Completed",
        "description": "Completed a Data Science internship focused on practical Data Science and Machine Learning projects.",
    },

    {
        "role": "Data Science Intern",
        "company": "Codec Technology",
        "status": "Completed",
        "description": "Completed internship experience involving practical Data Science and Machine Learning work.",
    },

    {
        "role": "Data Science Intern",
        "company": "Soft Nexus Technology",
        "status": "Completed",
        "description": "Completed internship focused on practical Data Science and analytical projects.",
    },

    {
        "role": "Java Programming Intern",
        "company": "CodSoft",
        "status": "Completed",
        "description": "Completed Java Programming internship by developing practical Java projects.",
    },

    {
        "role": "Python Developer",
        "company": "Skybrisk",
        "status": "Completed",
        "description": "Completed Python development internship involving practical Python programming and software projects.",
    },

    {
        "role": "Web Development Intern",
        "company": "StaxTech",
        "status": "Completed",
        "description": "Completed Web Development internship focused on practical frontend and web development projects.",
    },
]


CERTIFICATIONS = [
    {
        "title": "Career Essentials in Generative AI",
        "organization": "Microsoft + LinkedIn Learning",
        "icon": "🤖",
    },

    {
        "title": "Machine Learning with Python",
        "organization": "IBM / Cognitive Class",
        "icon": "🧠",
    },

    {
        "title": "5-Day AI Agents Intensive Course",
        "organization": "Google + Kaggle",
        "icon": "⚡",
    },

    {
        "title": "The Ultimate Job Ready Data Science Course",
        "organization": "CodeWithHarry",
        "icon": "📊",
    },

    {
        "title": "Data Structures & Algorithms Course for Beginners",
        "organization": "ScholarHat",
        "icon": "💻",
    },

    {
        "title": "Cybersecurity",
        "organization": "Tech Mahindra Foundation / Skill India Digital Hub",
        "icon": "🔐",
    },
]


AI_SYSTEM_PROMPT = f"""
You are Faizan AI, the official AI assistant
for Faizan Khan's portfolio.

ABOUT FAIZAN

Name: Faizan Khan

Education:
B.Tech Information Technology

University:
Dr. Ram Manohar Lohia Avadh University

Current Semester:
5th Semester

CGPA:
8.1

Expected Graduation:
2028

Professional Status:
Fresher

IMPORTANT:
Faizan has completed his listed internships.
Do NOT say that these internships are currently ongoing
or currently pursuing.

EMAIL:
{PROFILE["email"]}

GITHUB:
{PROFILE["github"]}

LINKEDIN:
{PROFILE["linkedin"]}


SKILLS:
{SKILLS}


PROJECTS:
{PROJECTS}


COMPLETED INTERNSHIP EXPERIENCE:
{EXPERIENCE}


CERTIFICATIONS:
{CERTIFICATIONS}


RULES:

1. Answer professionally.
2. Use only the information provided.
3. Do not invent information.
4. If asked about internships, say they are completed.
5. Faizan is a fresher despite having completed internships.
6. If asked about projects, mention the relevant project and GitHub link.
7. If asked about skills, give relevant skills.
8. If asked about education, mention B.Tech IT and 5th semester.
9. If asked about certifications, mention available certifications.
10. If asked about contact, provide email, GitHub or LinkedIn.
11. Keep responses concise and professional.
"""


@app.get("/")
def home():
    return {
        "message": "Faizan AI Portfolio API is running!",
        "status": "success"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/api/profile")
def profile():
    return {
        **PROFILE,
        "skills": SKILLS,
        "projects": PROJECTS,
        "experience": EXPERIENCE,
        "certifications": CERTIFICATIONS,
    }


@app.get("/api/projects")
def projects():
    return {
        "count": len(PROJECTS),
        "projects": PROJECTS,
    }


@app.get("/api/experience")
def experience():
    return {
        "count": len(EXPERIENCE),
        "experience": EXPERIENCE,
    }


@app.get("/api/certifications")
def certifications():
    return {
        "count": len(CERTIFICATIONS),
        "certifications": CERTIFICATIONS,
    }


@app.post("/api/chat")
def chat(request: ChatRequest):

    if not request.message.strip():
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty."
        )

    if client is None:
        raise HTTPException(
            status_code=500,
            detail="GROQ_API_KEY is not configured."
        )

    try:

        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",

            messages=[
                {
                    "role": "system",
                    "content": AI_SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": request.message,
                },
            ],

            temperature=0.4,
            max_tokens=700,
        )

        return {
            "response": completion.choices[0].message.content
        }

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=str(error)
        )