import { useState } from "react";
import "./App.css";

/* =========================================================
   PROFILE
========================================================= */

const PROFILE = {
  name: "Faizan Khan",
  email: "faijankha7860@gmail.com",
  github: "https://github.com/faizankhan07867",
  linkedin: "https://www.linkedin.com/in/faizankhan0786",
};


/* =========================================================
   RESUME
========================================================= */

const RESUME_IMAGE = "/resume/Faizan_Khan_Resume.jpeg";


/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  {
    icon: "🐍",
    title: "Python",
    subtitle: "Programming",
  },
  {
    icon: "☕",
    title: "Java",
    subtitle: "Programming & DSA",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    subtitle: "AI Models",
  },
  {
    icon: "📊",
    title: "Data Science",
    subtitle: "Analytics",
  },
  {
    icon: "🔥",
    title: "Deep Learning",
    subtitle: "TensorFlow & Keras",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    subtitle: "OpenCV",
  },
  {
    icon: "🌐",
    title: "Web Development",
    subtitle: "HTML, CSS & JavaScript",
  },
  {
    icon: "⚛️",
    title: "React",
    subtitle: "Frontend",
  },
  {
    icon: "🗄️",
    title: "SQL",
    subtitle: "Database",
  },
  {
    icon: "🐙",
    title: "Git & GitHub",
    subtitle: "Version Control",
  },
  {
    icon: "🚀",
    title: "FastAPI",
    subtitle: "Backend API",
  },
];


/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    icon: "🧠",
    title: "Brain Tumor Detection using CNN",
    category: "Deep Learning",
    description:
      "CNN-based deep learning project for detecting brain tumors from MRI images.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
    ],
    github:
      "https://github.com/faizankhan07867/Brain-Tumor-Detection-using-CNN",
  },

  {
    icon: "🚦",
    title: "Traffic Prediction System",
    category: "Machine Learning",
    description:
      "Machine learning project for traffic prediction and congestion analysis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    github:
      "https://github.com/faizankhan07867/Traffic-Prediction-System",
  },

  {
    icon: "💳",
    title: "Credit Card Fraud Detection",
    category: "Data Science",
    description:
      "Machine learning system for identifying potentially fraudulent transactions.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    github:
      "https://github.com/faizankhan07867/Credit-Card-Fraud-Detection",
  },

  {
    icon: "📈",
    title: "Stock Price Prediction using LSTM",
    category: "Deep Learning",
    description:
      "LSTM-based deep learning project for stock price prediction.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
    ],
    github:
      "https://github.com/faizankhan07867/Stock-Price-Prediction-using-LSTM",
  },

  {
    icon: "🧬",
    title: "Parkinson's Disease Prediction",
    category: "Machine Learning",
    description:
      "Machine learning project for prediction using biomedical features.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    github:
      "https://github.com/faizankhan07867/Parkinson-s-Disease-Prediction",
  },

  {
    icon: "🖱️",
    title: "AI Virtual Mouse",
    category: "Computer Vision",
    description:
      "AI-powered virtual mouse using hand gesture recognition.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
    ],
    github:
      "https://github.com/faizankhan07867/AI-Virtual-Mouse",
  },
];


/* =========================================================
   INTERNSHIPS
========================================================= */

const INTERNSHIPS = [
  {
    role: "Data Science Intern",
    company: "CodeAlpha",
    duration: "20 May 2026 – 20 June 2026",
    certificate:
      "/certificates/internships/codealpha-data-science.jpg",
  },

  {
    role: "Data Science Intern",
    company: "Codec Technologies Pvt. Ltd.",
    duration: "06 June 2026 – 06 July 2026",
    certificate:
      "/certificates/internships/codec-data-science.jpg",
  },

  {
    role: "Data Science & Machine Learning Intern",
    company: "Soft Nexis Technology",
    duration: "01 June 2026 – 08 July 2026",
    certificate:
      "/certificates/internships/soft-nexis-data-science-ml.jpg",
  },

  {
    role: "Java Programming Intern",
    company: "CodSoft",
    duration: "Completed",
    certificate:
      "/certificates/internships/codsoft-java.jpg",
  },

  {
    role: "Front-End Developer Intern",
    company: "StaxTech",
    duration: "Completed",
    certificate:
      "/certificates/internships/staxtech-frontend.jpg",
  },

  {
    role: "Python Developer Intern",
    company: "The Skybrisk",
    duration: "Completed",
    certificate:
      "/certificates/internships/skybrisk-python-developer-offer.jpg",
  },
];


/* =========================================================
   CERTIFICATIONS
========================================================= */

const CERTIFICATIONS = [
  {
    title: "Python Programming",
    organization: "Microsoft",
    image:
      "/certificates/learning/python-programming-microsoft.jpg",
  },

  {
    title: "Machine Learning with Python",
    organization: "IBM",
    image:
      "/certificates/learning/machine-learning-ibm.jpg",
  },

  {
    title: "Cybersecurity",
    organization: "Tech Mahindra",
    image:
      "/certificates/learning/cybersecurity-tech-mahindra.jpg",
  },

  {
    title: "AI Agents Intensive Course",
    organization: "Google / Kaggle",
    image:
      "/certificates/learning/ai-agents-google-kaggle.jpg",
  },

  {
    title: "Data Structures & Algorithms",
    organization: "ScholarHat",
    image:
      "/certificates/learning/dsa-scholarhat.jpg",
  },

  {
    title: "Python Bootcamp",
    organization: "CodeWithHarry",
    image:
      "/certificates/learning/python-bootcamp-codewithharry.jpg",
  },

  {
    title: "Data Science Course",
    organization: "CodeWithHarry",
    image:
      "/certificates/learning/data-science-codewithharry.jpg",
  },

  {
    title: "Generative AI Career Essentials",
    organization: "Microsoft + LinkedIn",
    image:
      "/certificates/learning/generative-ai-microsoft-linkedin.jpg",
  },
];


/* =========================================================
   ACHIEVEMENTS
========================================================= */

const ACHIEVEMENTS = [
  {
    title: "N8N Hackathon",
    organization: "LetsUpgrade",
    image:
      "/certificates/achievements/n8n-hackathon-letsupgrade.jpg",
  },

  {
    title: "Internship Common Aptitude Test",
    organization: "ICAT",
    image:
      "/certificates/achievements/internship-common-aptitude-test.jpg",
  },

  {
    title: "Certificate of Excellence — 48th Rank",
    organization: "Unstop",
    image:
      "/certificates/achievements/unstop-48th-rank.jpg",
  },

  {
    title: "Secure AI/ML-Driven Software Development",
    organization: "Linux Foundation + OpenSSF",
    image:
      "/certificates/achievements/linux-foundation-secure-ai-ml.jpg",
  },

  {
    title: "National Financial Literacy Quiz 2026",
    organization: "NISM + SEBI",
    image:
      "/certificates/achievements/national-financial-literacy-quiz-nism-sebi.jpg",
  },
];


/* =========================================================
   APP
========================================================= */

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [resumeOpen, setResumeOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hi! I'm Faizan AI 🤖 Ask me about Faizan's skills, projects, education, internships or certifications.",
    },
  ]);


  /* =======================================================
     NAVIGATION
  ======================================================= */

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  /* =======================================================
     AI CHAT
  ======================================================= */

  const sendMessage = async () => {
    if (!message.trim() || loading) {
      return;
    }

    const userMessage = message.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://faizan-ai-backend.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : `Server error: ${response.status}`
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text:
            data.response ||
            data.message ||
            "No response received.",
        },
      ]);
    } catch (error) {
      console.error("Faizan AI Error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text:
            "Sorry, Faizan AI is temporarily unavailable. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };


  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">F</div>

          <span>
            Faizan
            <span className="blue">.AI</span>
          </span>
        </div>


        <div className="nav-links">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button
            onClick={() =>
              scrollToSection("certifications")
            }
          >
            Learning
          </button>

          <button
            onClick={() =>
              scrollToSection("achievements")
            }
          >
            Achievements
          </button>

          <button onClick={() => scrollToSection("ai")}>
            AI
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </div>


        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <section id="home" className="section hero">

        <div className="hero-content">

          <span className="badge">
            🚀 Fresher • AI/ML & Data Science
          </span>


          <h1>
            Hi, I'm{" "}
            <span className="gradient-text">
              Faizan Khan
            </span>
          </h1>


          <h2>
            B.Tech IT Student | AI/ML & Data Science Enthusiast
          </h2>


          <p className="hero-description">
            I build practical solutions using Python,
            Machine Learning, Data Science, Deep Learning,
            Computer Vision and Web Development.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View Projects →
            </button>


            <button
              className="secondary-button"
              onClick={() => setResumeOpen(true)}
            >
              📄 View Resume
            </button>


            <button
              className="secondary-button"
              onClick={() => scrollToSection("ai")}
            >
              🤖 Ask Faizan AI
            </button>

          </div>


          <div className="quick-stats">

            <div>
              <strong>8.1</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>6+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Internships</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Achievements</span>
            </div>

          </div>

        </div>


        <div className="hero-visual">

          <div className="ai-orb">
            <div className="orb-inner">
              AI
            </div>
          </div>

          <div className="floating-card floating-one">
            🧠 Machine Learning
          </div>

          <div className="floating-card floating-two">
            📊 Data Science
          </div>

          <div className="floating-card floating-three">
            🤖 Artificial Intelligence
          </div>

        </div>

      </section>


      {/* =================================================
          RESUME VIEWER
      ================================================= */}

      {resumeOpen && (

        <div className="resume-modal">

          <div className="resume-toolbar">

            <div className="resume-title">
              <strong>
                Faizan Khan — Resume
              </strong>
            </div>


            <button
              className="resume-close"
              onClick={() => setResumeOpen(false)}
              aria-label="Close resume"
            >
              ✕
            </button>

          </div>


          <div className="resume-image-container">

            <img
              src={RESUME_IMAGE}
              alt="Faizan Khan Resume"
              className="resume-image"
            />

          </div>

        </div>

      )}


      {/* =================================================
          ABOUT
      ================================================= */}

      <section id="about" className="section">

        <div className="section-heading">

          <span>ABOUT ME</span>

          <h2>
            Building with AI & Technology
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm <strong>Faizan Khan</strong>, a
              B.Tech Information Technology student
              at Dr. Ram Manohar Lohia Avadh University.
            </p>

            <p>
              I focus on Artificial Intelligence,
              Machine Learning, Data Science,
              Deep Learning, Computer Vision and
              Web Development.
            </p>

            <p>
              My goal is to build practical,
              real-world technology solutions while
              continuously improving my programming
              and problem-solving skills.
            </p>

          </div>


          <div className="about-card">

            <InfoRow
              label="Education"
              value="B.Tech IT"
            />

            <InfoRow
              label="University"
              value="RML Avadh University"
            />

            <InfoRow
              label="Semester"
              value="5th Semester"
            />

            <InfoRow
              label="CGPA"
              value="8.1"
            />

            <InfoRow
              label="Status"
              value="Fresher"
            />

            <InfoRow
              label="Graduation"
              value="2028"
            />

          </div>

        </div>

      </section>


      {/* =================================================
          SKILLS
      ================================================= */}

      <section id="skills" className="section">

        <div className="section-heading">

          <span>TECHNICAL SKILLS</span>

          <h2>
            Technologies I Work With
          </h2>

        </div>


        <div className="skills-grid">

          {SKILLS.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.subtitle}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section id="experience" className="section">

        <div className="section-heading">

          <span>EXPERIENCE</span>

          <h2>
            Internship Experience
          </h2>

          <p>
            Practical experience through internships
            and industry-oriented projects.
          </p>

        </div>


        <div className="timeline">

          {INTERNSHIPS.map((item, index) => (

            <div
              className="experience-card"
              key={index}
            >

              <div className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="experience-content">

                <span className="status">
                  ✓ Completed
                </span>

                <h3>
                  {item.role}
                </h3>

                <h4>
                  {item.company}
                </h4>

                <p>
                  {item.duration}
                </p>


                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button small-button"
                >
                  View Certificate ↗
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section id="projects" className="section">

        <div className="section-heading">

          <span>MY WORK</span>

          <h2>
            Featured Projects
          </h2>

          <p>
            Selected AI, Machine Learning,
            Data Science and software projects.
          </p>

        </div>


        <div className="projects-grid">

          {PROJECTS.map((project, index) => (

            <article
              className="project-card"
              key={index}
            >

              <div className="project-header">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="tech-list">

                  {project.technologies.map(
                    (technology, techIndex) => (

                      <span key={techIndex}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button small-button"
                >
                  GitHub ↗
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =================================================
          LEARNING
      ================================================= */}

      <section
        id="certifications"
        className="section"
      >

        <div className="section-heading">

          <span>LEARNING</span>

          <h2>
            Learning & Certifications
          </h2>

          <p>
            Certifications and courses completed
            throughout my learning journey.
          </p>

        </div>


        <div className="cert-grid">

          {CERTIFICATIONS.map(
            (certificate, index) => (

              <div
                className="certificate-card"
                key={index}
              >

                <div className="certificate-icon">
                  🎓
                </div>


                <div>

                  <span>
                    Certificate {index + 1}
                  </span>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.organization}
                  </p>


                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button small-button"
                  >
                    View Certificate ↗
                  </a>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section
        id="achievements"
        className="section"
      >

        <div className="section-heading">

          <span>ACHIEVEMENTS</span>

          <h2>
            Achievements & Participation
          </h2>

          <p>
            Competitions, quizzes and additional
            learning achievements.
          </p>

        </div>


        <div className="cert-grid">

          {ACHIEVEMENTS.map(
            (achievement, index) => (

              <div
                className="certificate-card"
                key={index}
              >

                <div className="certificate-icon">
                  🏆
                </div>


                <div>

                  <span>
                    Achievement {index + 1}
                  </span>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    <strong>
                      {achievement.organization}
                    </strong>
                  </p>


                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button small-button"
                  >
                    View Certificate ↗
                  </a>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =================================================
          AI
      ================================================= */}

      <section id="ai" className="section ai-section">

        <div className="section-heading">

          <span>
            ARTIFICIAL INTELLIGENCE
          </span>

          <h2>
            Meet Faizan AI 🤖
          </h2>

          <p>
            Ask about Faizan's projects, skills,
            education, internships or certifications.
          </p>

        </div>


        <div className="chat-container">

          <div className="chat-header">

            <div className="ai-avatar">
              🤖
            </div>

            <div>

              <h3>
                Faizan AI
              </h3>

              <span>
                ● Online
              </span>

            </div>

          </div>


          <div className="messages">

            {messages.map((item, index) => (

              <div
                key={index}
                className={
                  item.role === "user"
                    ? "message user-message"
                    : "message ai-message"
                }
              >
                {item.text}
              </div>

            ))}


            {loading && (

              <div className="message ai-message">
                Thinking... 🤔
              </div>

            )}

          </div>


          <div className="chat-input">

            <input
              type="text"
              value={message}
              placeholder="Ask about Faizan..."
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />


            <button
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "➤"}
            </button>

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section id="contact" className="section contact">

        <div className="section-heading">

          <span>CONTACT</span>

          <h2>
            Let's Connect
          </h2>

          <p>
            Open to opportunities, collaboration
            and learning.
          </p>

        </div>


        <div className="contact-buttons">

          <a
            href={`mailto:${PROFILE.email}`}
            className="primary-button"
          >
            📧 Email
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            🐙 GitHub ↗
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            💼 LinkedIn ↗
          </a>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-links">

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={`mailto:${PROFILE.email}`}>
            Email
          </a>

        </div>


        <p>
          © 2026 Faizan Khan • Built with React, FastAPI & AI
        </p>

      </footer>

    </div>
  );
}


/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({ label, value }) {
  return (
    <div className="info-row">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


export default App;