import { useEffect, useState } from "react";

function App() {

  const [profile, setProfile] = useState(null);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Faizan AI 🤖 Ask me anything about Faizan, his skills or projects."
    }
  ]);

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(true);


  // ==========================================
  // Load Profile
  // ==========================================

  useEffect(() => {

    fetch("/api/profile")
      .then((response) => response.json())
      .then((data) => {

        setProfile(data);

      })
      .catch((error) => {

        console.error(
          "Profile API Error:",
          error
        );

      });

  }, []);


  // ==========================================
  // Send AI Message
  // ==========================================

  const sendMessage = async () => {

    if (!message.trim()) {
      return;
    }

    const userMessage = message;

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage
      }
    ]);

    setMessage("");

    setLoading(true);

    try {

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: userMessage
          })
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.detail ||
          "Something went wrong."
        );

      }


      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: data.response
        }
      ]);

    }

    catch (error) {

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: "Sorry, I couldn't connect to the AI backend."
        }
      ]);

      console.error(error);

    }

    finally {

      setLoading(false);

    }

  };


  // ==========================================
  // Enter Key
  // ==========================================

  const handleKeyDown = (event) => {

    if (event.key === "Enter") {
      sendMessage();
    }

  };


  // ==========================================
  // Scroll
  // ==========================================

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >

      {/* =====================================
          NAVBAR
      ====================================== */}

      <nav className="navbar">

        <div className="logo">

          <span className="logo-icon">
            F
          </span>

          <span>
            Faizan<span className="blue">.AI</span>
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
              scrollToSection("projects")
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              scrollToSection("ai")
            }
          >
            AI Assistant
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


      {/* =====================================
          HERO
      ====================================== */}

      <section
        id="home"
        className="hero section"
      >

        <div className="hero-content">

          <div className="badge">
            🚀 AI & Data Science Enthusiast
          </div>

          <h1>

            Hi, I'm{" "}

            <span className="gradient-text">
              Faizan Khan
            </span>

          </h1>


          <h2>
            B.Tech IT Student | AI/ML Developer
          </h2>


          <p className="hero-description">

            I build intelligent solutions using
            Artificial Intelligence, Machine Learning,
            Data Science and modern web technologies.

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
              <strong>
                {profile?.cgpa || "8.1"}
              </strong>

              <span>
                CGPA
              </span>
            </div>


            <div>
              <strong>
                6+
              </strong>

              <span>
                AI/ML Projects
              </span>
            </div>


            <div>
              <strong>
                10+
              </strong>

              <span>
                Technologies
              </span>
            </div>

          </div>

        </div>


        <div className="hero-card">

          <div className="ai-orb">

            <div className="orb-inner">
              AI
            </div>

          </div>

          <div className="floating-card card-one">
            🧠 Machine Learning
          </div>

          <div className="floating-card card-two">
            📊 Data Science
          </div>

          <div className="floating-card card-three">
            🤖 Artificial Intelligence
          </div>

        </div>

      </section>


      {/* =====================================
          ABOUT
      ====================================== */}

      <section
        id="about"
        className="section about"
      >

        <div className="section-heading">

          <span>
            ABOUT ME
          </span>

          <h2>
            Building the Future with AI
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-text">

            <p>

              I'm{" "}
              <strong>
                Faizan Khan
              </strong>,
              a B.Tech Information Technology
              student passionate about Artificial
              Intelligence, Machine Learning,
              Data Science and software development.

            </p>


            <p>

              I enjoy transforming real-world
              problems into intelligent solutions
              using Python, Machine Learning,
              Deep Learning and modern web
              technologies.

            </p>


            <p>

              My goal is to become a skilled AI/ML
              engineer and build technology that
              creates meaningful impact.

            </p>

          </div>


          <div className="about-card">

            <div className="info-row">
              <span>Name</span>
              <strong>Faizan Khan</strong>
            </div>

            <div className="info-row">
              <span>Education</span>
              <strong>B.Tech IT</strong>
            </div>

            <div className="info-row">
              <span>Year</span>
              <strong>2nd Year</strong>
            </div>

            <div className="info-row">
              <span>Semester</span>
              <strong>5th</strong>
            </div>

            <div className="info-row">
              <span>CGPA</span>
              <strong>8.1</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          SKILLS
      ====================================== */}

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

          {[
            ["🐍", "Python", "Programming & AI"],
            ["☕", "Java", "Programming & DSA"],
            ["🧠", "Machine Learning", "AI Models"],
            ["📊", "Data Science", "Analytics"],
            ["🌐", "Web Development", "Frontend"],
            ["🗄️", "SQL", "Database"],
            ["🔧", "Git", "Version Control"],
            ["🐙", "GitHub", "Collaboration"]
          ].map(
            (
              skill,
              index
            ) => (

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


      {/* =====================================
          PROJECTS
      ====================================== */}

      <section
        id="projects"
        className="section projects"
      >

        <div className="section-heading">

          <span>
            MY WORK
          </span>

          <h2>
            Featured Projects
          </h2>

        </div>


        <div className="projects-grid">

          {profile?.projects?.map(
            (
              project,
              index
            ) => (

              <div
                className="project-card"
                key={index}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <button>
                  View Project →
                </button>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================
          AI ASSISTANT
      ====================================== */}

      <section
        id="ai"
        className="section ai-section"
      >

        <div className="section-heading">

          <span>
            ARTIFICIAL INTELLIGENCE
          </span>

          <h2>
            Meet Faizan AI
          </h2>

          <p>
            Ask questions about Faizan's skills,
            projects and experience.
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
              (
                item,
                index
              ) => (

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
              placeholder="Ask me anything..."
              value={message}
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
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


      {/* =====================================
          CONTACT
      ====================================== */}

      <section className="section contact">

        <div className="section-heading">

          <span>
            CONTACT
          </span>

          <h2>
            Let's Build Something Amazing
          </h2>

          <p>
            Interested in AI, Machine Learning
            or collaboration?
          </p>

        </div>


        <div className="contact-buttons">

          <a
            href="mailto:faizan@example.com"
            className="primary-button"
          >
            📧 Email Me
          </a>


          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer>

        <p>
          © 2026 Faizan Khan. Built with ❤️,
          React & AI.
        </p>

      </footer>

    </div>

  );

}

export default App;