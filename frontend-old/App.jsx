import { useState, useRef, useEffect } from "react";
import "./App.css";


const API_URL = "http://127.0.0.1:8000";


function App() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Faizan's AI portfolio assistant. Ask me anything about his education, skills, projects, experience or certifications."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);


  // ========================================================
  // AUTO SCROLL
  // ========================================================

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages]);


  // ========================================================
  // SEND MESSAGE
  // ========================================================

  async function sendMessage() {

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    const userMessage = {
      role: "user",
      content: message
    };

    const updatedMessages = [
      ...messages,
      userMessage
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);


    // Temporary assistant message
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: ""
      }
    ]);


    try {

      const response = await fetch(
        `${API_URL}/chat`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: message,

            history: messages
              .filter(
                item =>
                  item.role === "user" ||
                  item.role === "assistant"
              )
          })
        }
      );


      if (!response.ok) {
        throw new Error("Server error");
      }


      const reader =
        response.body.getReader();

      const decoder =
        new TextDecoder();


      let assistantText = "";


      while (true) {

        const {
          done,
          value
        } = await reader.read();


        if (done) {
          break;
        }


        const chunk =
          decoder.decode(value);


        assistantText += chunk;


        setMessages(prev => {

          const copy = [...prev];

          copy[copy.length - 1] = {
            role: "assistant",
            content: assistantText
          };

          return copy;

        });

      }

    } catch (error) {

      console.error(error);

      setMessages(prev => {

        const copy = [...prev];

        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Sorry, I couldn't connect to the AI server. Please make sure the FastAPI backend is running."
        };

        return copy;

      });

    }


    setLoading(false);
  }


  // ========================================================
  // ENTER KEY
  // ========================================================

  function handleKeyDown(event) {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();
    }
  }


  // ========================================================
  // CLEAR CHAT
  // ========================================================

  function clearChat() {

    setMessages([
      {
        role: "assistant",
        content:
          "Chat cleared. What would you like to know about Faizan?"
      }
    ]);

  }


  // ========================================================
  // COPY RESPONSE
  // ========================================================

  async function copyResponse(text) {

    try {

      await navigator.clipboard.writeText(text);

    } catch (error) {

      console.error(error);

    }
  }


  // ========================================================
  // UI
  // ========================================================

  return (

    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          Faizan<span>.AI</span>
        </div>

        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#chat">
            AI Chat
          </a>

        </div>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            AI-POWERED PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Faizan Khan</span>
          </h1>

          <h2>
            B.Tech IT Student & AI Enthusiast
          </h2>

          <p className="hero-description">

            Python & Java Developer passionate about
            Data Science, Artificial Intelligence,
            Machine Learning and Web Development.

          </p>

          <div className="hero-buttons">

            <a
              href="#chat"
              className="primary-button"
            >
              🤖 Chat With My AI
            </a>

            <a
              href="#projects"
              className="secondary-button"
            >
              View Projects
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        className="section"
        id="about"
      >

        <h2>About Me</h2>

        <p>

          I'm Faizan Khan, a B.Tech Information Technology
          student currently in my 5th semester with a CGPA
          of 8.1. I am interested in Python, Java,
          Data Science, Artificial Intelligence,
          Machine Learning and Web Development.

        </p>

      </section>


      {/* SKILLS */}

      <section
        className="section"
        id="skills"
      >

        <h2>Technical Skills</h2>

        <div className="skills">

          {[
            "Python",
            "Java",
            "Data Science",
            "Machine Learning",
            "Deep Learning",
            "Generative AI",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Git",
            "GitHub"
          ].map(skill => (

            <span
              className="skill"
              key={skill}
            >
              {skill}
            </span>

          ))}

        </div>

      </section>


      {/* PROJECTS */}

      <section
        className="section"
        id="projects"
      >

        <h2>Featured Projects</h2>

        <div className="project-grid">

          {[
            [
              "AI Virtual Mouse",
              "Python • OpenCV • Computer Vision"
            ],

            [
              "Parkinson's Disease Prediction",
              "Python • ML • Scikit-learn"
            ],

            [
              "Iris Classification",
              "Python • ML • Scikit-learn"
            ],

            [
              "Brain Tumor Detection",
              "AI • ML • Deep Learning"
            ],

            [
              "Traffic Prediction System",
              "AI • ML • Data Science"
            ],

            [
              "Credit Card Fraud Detection",
              "Python • Data Science • ML"
            ],

            [
              "Stock Price Prediction using LSTM",
              "Python • TensorFlow • LSTM"
            ]

          ].map(project => (

            <div
              className="project-card"
              key={project[0]}
            >

              <h3>
                {project[0]}
              </h3>

              <p>
                {project[1]}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* EXPERIENCE */}

      <section
        className="section"
        id="experience"
      >

        <h2>Experience</h2>

        <div className="experience">

          <div>
            <h3>Data Science Intern</h3>
            <p>Codec Technology</p>
          </div>

          <div>
            <h3>Data Science Intern</h3>
            <p>Soft Nexis Technology</p>
          </div>

          <div>
            <h3>Frontend Web Developer</h3>
            <p>StaxTech</p>
          </div>

        </div>

      </section>


      {/* AI CHAT */}

      <section
        className="chat-section"
        id="chat"
      >

        <div className="chat-header">

          <div>

            <p className="chat-label">
              AI PORTFOLIO ASSISTANT
            </p>

            <h2>
              Chat With My AI 🤖
            </h2>

            <p>
              Ask questions about my skills,
              projects, education and experience.
            </p>

          </div>

          <button
            className="clear-button"
            onClick={clearChat}
          >
            Clear Chat
          </button>

        </div>


        <div className="chat-box">

          <div className="messages">

            {messages.map(
              (message, index) => (

                <div
                  className={`message ${
                    message.role
                  }`}
                  key={index}
                >

                  <div className="avatar">

                    {message.role === "user"
                      ? "U"
                      : "AI"}

                  </div>

                  <div className="message-content">

                    <p>
                      {message.content ||
                        (loading &&
                          index ===
                            messages.length - 1
                          ? "Thinking..."
                          : "")}
                    </p>


                    {message.role ===
                      "assistant" &&
                      message.content && (

                        <button
                          className="copy-button"
                          onClick={() =>
                            copyResponse(
                              message.content
                            )
                          }
                        >
                          Copy
                        </button>

                      )}

                  </div>

                </div>

              )
            )}

            <div
              ref={messagesEndRef}
            />

          </div>


          <div className="suggestions">

            <button
              onClick={() =>
                setInput(
                  "Tell me about Faizan's projects."
                )
              }
            >
              💼 Projects
            </button>

            <button
              onClick={() =>
                setInput(
                  "What are Faizan's strongest skills?"
                )
              }
            >
              🛠️ Skills
            </button>

            <button
              onClick={() =>
                setInput(
                  "Tell me about Faizan's education."
                )
              }
            >
              🎓 Education
            </button>

            <button
              onClick={() =>
                setInput(
                  "What AI projects has Faizan built?"
                )
              }
            >
              🤖 AI Projects
            </button>

          </div>


          <div className="input-area">

            <textarea
              value={input}
              onChange={e =>
                setInput(e.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Faizan..."
              rows="1"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
            >
              {loading
                ? "..."
                : "Send"}
            </button>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <h3>
          Faizan Khan
        </h3>

        <p>
          B.Tech IT Student • AI & Data Science Enthusiast
        </p>

        <div className="social-links">

          <a
            href="https://github.com/faizankhan07867"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/faizankhan0786"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>

  );
}


export default App;