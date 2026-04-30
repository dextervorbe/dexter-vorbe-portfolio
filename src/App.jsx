import { useEffect, useMemo, useState } from "react";
import "./App.css";

const HEADING_TEXT = "Welcome.";
const BODY_TEXT =
  "My name is Dexter Vorbe, a front-end developer based in Pennsylvania, USA. I have worked on a wide range of front-end projects, from startup landing pages to ecommerce websites, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.";
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dextervorbe/",
    label: "Visit Dexter Vorbe on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5v9.8H3.7V8.5h3.24Zm.22-3.03c0 1-.75 1.8-1.84 1.8h-.02a1.79 1.79 0 1 1 1.86-1.8Zm11.14 7.21v5.62h-3.24v-5.25c0-1.31-.47-2.2-1.64-2.2-.89 0-1.43.6-1.67 1.18-.08.21-.11.51-.11.8v5.47H8.4V8.5h3.24v1.38c.47-.72 1.31-1.74 3.2-1.74 2.34 0 4.1 1.53 4.1 4.84Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/dextervorbe",
    label: "Visit Dexter Vorbe on GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.69c-2.77.6-3.35-1.18-3.35-1.18-.45-1.14-1.11-1.44-1.11-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.88 1.51 2.31 1.07 2.87.82.09-.64.35-1.07.64-1.31-2.21-.25-4.54-1.1-4.54-4.93 0-1.09.4-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.68 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.4.21 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.68-4.56 4.93.36.31.68.92.68 1.86v2.77c0 .27.18.59.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dextervorbe/",
    label: "Visit Dexter Vorbe on Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.25 2h9.5A5.26 5.26 0 0 1 22 7.25v9.5A5.26 5.26 0 0 1 16.75 22h-9.5A5.26 5.26 0 0 1 2 16.75v-9.5A5.26 5.26 0 0 1 7.25 2Zm-.17 1.8A3.29 3.29 0 0 0 3.8 7.08v9.84a3.29 3.29 0 0 0 3.28 3.28h9.84a3.29 3.29 0 0 0 3.28-3.28V7.08a3.29 3.29 0 0 0-3.28-3.28H7.08Zm10.34 1.35a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34Zm-5.42 1.2a5.65 5.65 0 1 1 0 11.3 5.65 5.65 0 0 1 0-11.3Zm0 1.8a3.85 3.85 0 1 0 0 7.7 3.85 3.85 0 0 0 0-7.7Z" />
      </svg>
    ),
  },
];
const PROJECTS = [
  {
    title: "S. Lynn Books",
    image: "/images/project-s-lynn.png",
    liveUrl: "https://authorslynnbooks.com/",
  },
  {
    title: "Ravaa's Bagels",
    image: "/images/project-ravaas-bagels.png",
    liveUrl: "https://dextervorbe.github.io/ravaas-bagels/",
  },
  {
    title: "Testimonial Page",
    image: "/images/project-testimonial-page.png",
    liveUrl: "https://value-business-service.netlify.app/#home",
  },
  { title: "Coming Soon", image: "", liveUrl: "" },
  { title: "Coming Soon", image: "", liveUrl: "" },
  { title: "Coming Soon", image: "", liveUrl: "" },
];

function App() {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    if (headingIndex >= HEADING_TEXT.length) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setHeadingIndex((value) => value + 1);
    }, 85);

    return () => clearTimeout(timer);
  }, [headingIndex]);

  useEffect(() => {
    if (headingIndex < HEADING_TEXT.length) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, [headingIndex]);

  const headingDisplay = useMemo(
    () => HEADING_TEXT.slice(0, headingIndex),
    [headingIndex],
  );
  const isTypingComplete = headingIndex >= HEADING_TEXT.length;

  return (
    <main className="homepage">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className={isIntroComplete ? "" : "typing"}>
              {headingDisplay}
              {!isIntroComplete && <span className="typing-caret" />}
            </h1>
            <p className={isTypingComplete ? "hero-body visible" : "hero-body"}>
              {BODY_TEXT}
            </p>
          </div>
          <div className="hero-image-wrap">
            <img
              src="/images/hero-setup.png"
              alt="Laptop with code in neon lighting"
            />
          </div>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>
      <section className="projects">
        <div className="projects-wrap">
          <h2>My Recent Work</h2>
          <p>
            Here are a few projects I have worked on. More projects are coming
            soon.
          </p>

          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className={`project-tile ${project.liveUrl ? "" : "placeholder"}`}
              >
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} />
                ) : (
                  <div className="project-empty">{project.title}</div>
                )}

                <div className="project-overlay">
                  {project.liveUrl ? (
                    <a
                      className="visit-btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <span className="coming-label">Coming Soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrap">
          <div className="contact-left">
            <h2>
              Get In Touch<span>.</span>
            </h2>
            <p>
              Looking to partner or build something together? Reach out and I
              will get back to you as soon as possible.
            </p>
            <ul className="contact-list">
              <li>
                <a
                  className="contact-icon-link"
                  href="mailto:dexterlabcodes@gmail.com"
                  aria-label="Send email to Dexter Vorbe"
                  title="Email Dexter"
                >
                  <span className="contact-icon" aria-hidden="true">
                    ✉
                  </span>
                </a>
                <a href="mailto:dexterlabcodes@gmail.com">
                  dexterlabcodes@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="contact-icon-link"
                  href="tel:+14844261415"
                  aria-label="Call Dexter Vorbe"
                  title="Call Dexter"
                >
                  <span className="contact-icon" aria-hidden="true">
                    ☎
                  </span>
                </a>
                <a href="tel:+14844261415">(484) 426-1415</a>
              </li>
            </ul>
            <div className="social-links" aria-label="Dexter Vorbe social links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-photo-ring">
              <img
                src="/images/contact-profile.jpeg"
                alt="Dexter Vorbe profile portrait"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-credit" aria-label="Copyright and credit">
          <p>&copy;2026 All Rights Reserved.</p>
          <p>
            Made with <span className="footer-heart">💜</span> by Dexter Vorbe
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-heading">Connect with me:</p>
          <div className="footer-social-links" aria-label="Footer social links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={`footer-${link.name}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
