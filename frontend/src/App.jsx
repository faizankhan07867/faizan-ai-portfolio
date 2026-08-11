import { useState } from "react";
import "./App.css";

/* =========================================================
   PROFILE
========================================================= */

const PROFILE = {
  name: "Faizan Khan",
  education: "B.Tech Information Technology",
  university: "Dr. Ram Manohar Lohia Avadh University",
  semester: "5th Semester",
  cgpa: "8.1",
  graduation: "2028",
  status: "Fresher",
  github: "https://github.com/faizankhan07867",
  linkedin: "https://www.linkedin.com/in/faizankhan0786",
  email: "faijankha7860@gmail.com",
};


/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    title: "Parkinson's Disease Prediction",
    category: "Machine Learning",
    icon: "🧠",
    description:
      "Machine learning project for predicting Parkinson's disease using relevant biomedical features.",
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
    title: "AI Virtual Mouse",
    category: "Computer Vision",
    icon: "🖱️",
    description:
      "AI-powered virtual mouse using hand gesture recognition and computer vision.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
    ],
    github:
      "https://github.com/faizankhan07867/AI-Virtual-Mouse",
  },

  {
    title: "Stock Price Prediction using LSTM",
    category: "Deep Learning",
    icon: "📈",
    description:
      "Deep learning project using LSTM networks for stock price prediction.",
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
    title: "Credit Card Fraud Detection",
    category: "Data Science",
    icon: "💳",
    description:
      "Machine learning system designed to identify potentially fraudulent credit card transactions.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    github:
      "https://github.com/faizankhan07867/Credit-Card-Fraud-Detection",
  },

  {
    title: "Traffic Prediction System",
    category: "Machine Learning",
    icon: "🚦",
    description:
      "Machine learning project for traffic prediction and congestion analysis.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    github:
      "https://github.com/faizankhan07867/Traffic-Prediction-System",
  },

  {
    title: "Brain Tumor Detection using CNN",
    category: "Deep Learning",
    icon: "🧬",
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
    title: "Mood-Based Learning Website",
    category: "Web Development",
    icon: "🌐",
    description:
      "Interactive web development project designed around mood-based learning.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/faizankhan07867/Mood-Based-Learning-Website_",
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
    documentLabel: "View Document",
  },
];


/* =========================================================
   LEARNING & CERTIFICATIONS
========================================================= */

const CERTIFICATIONS = [
  {
    title: "Python Programming",
    organization: "Microsoft / Skill India Digital Hub",
    certificate:
      "/certificates/learning/python-programming-microsoft.jpg",
  },

  {
    title: "Machine Learning with Python",
    organization: "IBM / Cognitive Class",
    certificate:
      "/certificates/learning/machine-learning-ibm.jpg",
  },

  {
    title: "Cybersecurity",
    organization: "Tech Mahindra Foundation / Skill India Digital Hub",
    certificate:
      "/certificates/learning/cybersecurity-tech-mahindra.jpg",
  },

  {
    title: "5-Day AI Agents Intensive Course",
    organization: "Google / Kaggle",
    certificate:
      "/certificates/learning/ai-agents-google-kaggle.jpg",
  },

  {
    title: "Data Structures & Algorithms Course for Beginners",
    organization: "ScholarHat",
    certificate:
      "/certificates/learning/dsa-scholarhat.jpg",
  },

  {
    title: "Complete 2025 Python Bootcamp",
    organization: "CodeWithHarry",
    certificate:
      "/certificates/learning/python-bootcamp-codewithharry.jpg",
  },

  {
    title: "The Ultimate Job Ready Data Science Course",
    organization: "CodeWithHarry",
    certificate:
      "/certificates/learning/data-science-codewithharry.jpg",
  },

  {
    title: "Career Essentials in Generative AI",
    organization: "Microsoft + LinkedIn Learning",
    certificate:
      "/certificates/learning/generative-ai-microsoft-linkedin.jpg",
  },
];


/* =========================================================
   ACHIEVEMENTS
========================================================= */

const ACHIEVEMENTS = [
  {
    title: "N8N Hackathon — Student Ambassador Program",
    organization: "LetsUpgrade",
    description:
      "Certificate of Participation in the N8N Hackathon / Student Ambassador Program.",
    certificate:
      "/certificates/achievements/n8n-hackathon-letsupgrade.jpg",
  },

  {
    title: "Internship Common Aptitude Test",
    organization: "ICAT",
    description:
      "Certificate of Participation in the Internship Common Aptitude Test.",
    certificate:
      "/certificates/achievements/internship-common-aptitude-test.jpg",
  },

  {
    title: "Certificate of Excellence — 48th Rank",
    organization: "Unstop",
    description:
      "Certificate of Excellence for securing 48th rank in the Engineering November Series Daily Quiz.",
    certificate:
      "/certificates/achievements/unstop-48th-rank.jpg",
  },

  {
    title: "Secure AI/ML-Driven Software Development",
    organization: "Linux Foundation + OpenSSF",
    description:
      "Completed LFEL1012 course on Secure AI/ML-Driven Software Development.",
    certificate:
      "/certificates/achievements/linux-foundation-secure-ai-ml.jpg",
  },

  {
    title: "National Financial Literacy Quiz 2026",
    organization: "NISM + SEBI",
    description:
      "Certificate of Participation in the National Financial Literacy Quiz 2026.",
    certificate:
      "/certificates/achievements/national-financial-literacy-quiz-nism-sebi.jpg",
  },
];


/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  ["🐍", "Python", "Programming"],
  ["☕", "Java", "Programming & DSA"],
  ["🧠", "Machine Learning", "AI Models"],
  ["📊", "Data Science", "Analytics"],
  ["🔥", "Deep Learning", "TensorFlow & Keras"],
  ["👁️", "Computer Vision", "OpenCV"],
  ["🌐", "Web Development", "HTML, CSS & JavaScript"],
  ["⚛️", "React", "Frontend"],
  ["🗄️", "SQL", "Database"],
  ["🐙", "Git & GitHub", "Version Control"],
  ["🚀", "FastAPI", "Backend API"],
];


/* =========================================================
   APP
========================================================= */

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hi! I'm Faizan AI 🤖 Ask me about Faizan's projects, skills, education, internships, certifications or contact information.",
    },
  ]);


  /* =====================================================
     NAVIGATION
  ===================================================== */

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };


  /* =====================================================
     AI CHAT
  ===================================================== */

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
        "http://127.0.0.1:8000/api/chat",
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
          data.detail || "AI request failed"
        );
      }


      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: data.response,
        },
      ]);

    } catch (error) {

      console.error(error);

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text:
            "I couldn't connect to Faizan AI. Please make sure the FastAPI backend is running on port 8000.",
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


  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">

        <div className="logo">

          <div className="logo-icon">
            F
          </div>

          <span>
            Faizan
            <span className="blue">
              .AI
            </span>
          </span>

        </div>


        <div className="nav-links">

          <button
            onClick={() =>
              scrollToSection("home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              scrollToSection("skills")
            }
          >
            Skills
          </button>

          <button
            onClick={() =>
              scrollToSection("experience")
            }
          >
            Experience
          </button>

          <button
            onClick={() =>
              scrollToSection("projects")
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              scrollToSection("certifications")
            }
          >
            Certifications
          </button>

          <button
            onClick={() =>
              scrollToSection("achievements")
            }
          >
            Achievements
          </button>

          <button
            onClick={() =>
              scrollToSection("ai")
            }
          >
            AI
          </button>

          <button
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>

        </div>


        <button
          className="theme-button"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="section hero"
      >

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

            I build practical solutions using
            Python, Machine Learning, Data Science,
            Deep Learning, Computer Vision and
            Web Development.

          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                scrollToSection("projects")
              }
            >
              View Projects →
            </button>


            <a
              href="/resume/Faizan_Khan_Resume.pdf"
              download
              className="secondary-button"
            >
              📄 Download Resume
            </a>


            <button
              className="secondary-button"
              onClick={() =>
                scrollToSection("ai")
              }
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
              <strong>7</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Internships</span>
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
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="section"
      >

        <div className="section-heading">

          <span>
            ABOUT ME
          </span>

          <h2>
            Building with AI & Technology
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-text">

            <p>

              I'm{" "}
              <strong>
                Faizan Khan
              </strong>
              , a B.Tech Information Technology
              student at Dr. Ram Manohar Lohia
              Avadh University.

            </p>


            <p>

              I'm currently pursuing my
              5th semester and developing
              practical projects in Artificial
              Intelligence, Machine Learning,
              Data Science, Deep Learning,
              Computer Vision and Web Development.

            </p>


            <p>

              My career objective is to build
              strong technical and problem-solving
              skills and begin my professional
              career in AI, Data Science or
              Software Development.

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

      <section
        id="skills"
        className="section"
      >

        <div className="section-heading">

          <span>
            TECHNICAL SKILLS
          </span>

          <h2>
            Technologies I Work With
          </h2>

        </div>


        <div className="skills-grid">

          {SKILLS.map(
            (skill, index) => (

              <div
                className="skill-card"
                key={index}
              >

                <div className="skill-icon">
                  {skill[0]}
                </div>

                <h3>
                  {skill[1]}
                </h3>

                <p>
                  {skill[2]}
                </p>

              </div>

            )
          )}

        </div>

      </section>


      {/* =================================================
          INTERNSHIP EXPERIENCE
      ================================================= */}

      <section
        id="experience"
        className="section"
      >

        <div className="section-heading">

          <span>
            EXPERIENCE
          </span>

          <h2>
            Internship Experience
          </h2>

          <p>
            Completed internships and practical industry experience.
          </p>

        </div>


        <div className="timeline">

          {INTERNSHIPS.map(
            (internship, index) => (

              <div
                className="experience-card"
                key={index}
              >

                <div className="experience-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                <div>

                  <span className="status">
                    ✓ Completed
                  </span>


                  <h3>
                    {internship.role}
                  </h3>


                  <h4>
                    {internship.company}
                  </h4>


                  <p>
                    {internship.duration}
                  </p>


                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button small-button"
                  >
                    {internship.documentLabel ||
                      "View Certificate"} ↗
                  </a>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="projects"
        className="section"
      >

        <div className="section-heading">

          <span>
            MY WORK
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            Explore my projects and source code on GitHub.
          </p>

        </div>


        <div className="projects-grid">

          {PROJECTS.map(
            (project, index) => (

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


                  <div className="project-buttons">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button small-button"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =================================================
          LEARNING & CERTIFICATIONS
      ================================================= */}

      <section
        id="certifications"
        className="section"
      >

        <div className="section-heading">

          <span>
            LEARNING
          </span>

          <h2>
            Learning & Certifications
          </h2>

          <p>
            Courses and certifications completed
            during my learning journey.
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
                    href={certificate.certificate}
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

          <span>
            ACHIEVEMENTS
          </span>

          <h2>
            Achievements & Participation
          </h2>

          <p>
            Competitions, participation and
            additional learning achievements.
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


                  <p>
                    {achievement.description}
                  </p>


                  <a
                    href={achievement.certificate}
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
          AI ASSISTANT
      ================================================= */}

      <section
        id="ai"
        className="section ai-section"
      >

        <div className="section-heading">

          <span>
            ARTIFICIAL INTELLIGENCE
          </span>

          <h2>
            Meet Faizan AI 🤖
          </h2>

          <p>
            Ask about Faizan's projects,
            skills, education, internships,
            certifications or contact information.
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

            {messages.map(
              (item, index) => (

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

              )
            )}


            {loading && (

              <div className="message ai-message">
                Thinking... 🤔
              </div>

            )}

          </div>


          <div className="chat-input">

            <input
              type="text"
              placeholder="Ask about Faizan..."
              value={message}
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

      <section
        id="contact"
        className="section contact"
      >

        <div className="section-heading">

          <span>
            CONTACT
          </span>

          <h2>
            Let's Connect
          </h2>

          <p>
            Open to opportunities, collaboration and learning.
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


          <a
            href={`mailto:${PROFILE.email}`}
          >
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
   INFO ROW COMPONENT
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