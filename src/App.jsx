import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import twtIcon from './assets/twt.png'
import navIcon from './assets/nav1.png'
import moreIcon from './assets/more.png'
import viewIcon from './assets/view.png'
import hartIcon from './assets/hart.png'
import bckIcon from './assets/bck.png'
import nxtIcon from './assets/nxt.png'
import wobbyTitleImg from './assets/wobbytitle.png'
import spotTitleImg from './assets/spottitle.png'
import newtTitleImg from './assets/newttitlee.png'
import card1Img from './assets/card1.png'
import spotLaptopImg from './assets/card2.png'
import newtPhoneImg from './assets/newtphone.png'
import viewpIcon from './assets/viewp.png'
import viewp0Icon from './assets/viewp0.png'
import gitHubIcon from './assets/github.png'
import webpageIcon from './assets/webpage 3.svg'
import vsCodeIcon from './assets/vs code.png'
import reactNativeIcon from './assets/react native.png'
import typescriptIcon from './assets/typescript.png'
import mediapipeIcon from './assets/mediapipe.png'
import tensorflowIcon from './assets/tensorflow.png'
import pythonIcon from './assets/python.png'
import swiftIcon from './assets/swift.png'
import supabaseIcon from './assets/supabase.png'
import nextjsIcon from './assets/next.js.png'
import cssIcon from './assets/css.png'
import sqlIcon from './assets/sql.png'
import geminiIcon from './assets/gemini.png'
import leafletIcon from './assets/leaflet.png'
import flutterIcon from './assets/flutter.svg'
import dartIcon from './assets/dart.svg'
import folderIcon from './assets/folder.svg'
import folder0Icon from './assets/folder0.svg'
import eventIcon from './assets/event.svg'
import event0Icon from './assets/event0.svg'
import techIcon from './assets/tech.svg'
import tech0Icon from './assets/tech0.svg'
import galleryIcon from './assets/gallery.svg'
import googleIoPreview from './assets/notion.svg'
import hackathonPreview from './assets/aws.svg'
import uiuxPreview from './assets/uxph.svg'
import gdscPreview from './assets/devfest.svg'
import reactPreview from './assets/wildquacc.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeShowcase, setActiveShowcase] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeTab, setActiveTab] = useState('projects')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');

  useEffect(() => {
    const line1Text = "Tweetie M.";
    const line2Text = "Zapanta";

    let i = 0;
    let j = 0;
    let timer;

    function type() {
      if (i < line1Text.length) {
        setTypedLine1(line1Text.substring(0, i + 1));
        i++;
        timer = setTimeout(type, 100);
      } else if (j < line2Text.length) {
        setTypedLine2(line2Text.substring(0, j + 1));
        j++;
        timer = setTimeout(type, 100);
      }
    }

    const startDelay = setTimeout(type, 300);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timer);
    };
  }, []);

  // Scroll Reveal Intersection Observer Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px', // triggers slightly before entering the screen for natural flow
        threshold: 0.05,
      };

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else if (entry.boundingClientRect.top > 0) {
            // Only remove 'revealed' when the element goes below the viewport (scrolling up)
            // This prevents jarring disappearance when scrolling down past an element
            entry.target.classList.remove('revealed');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      const elementsToReveal = document.querySelectorAll('.scroll-reveal');
      elementsToReveal.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Glitter / Sparkle Cursor Trail Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Limit sparkle density so it feels graceful, not cluttered
      if (Math.random() > 0.4) return;

      const sparkle = document.createElement('div');
      sparkle.className = 'cursor-sparkle';

      // Magical set of spark and star character symbols
      const symbols = ['✦', '✨', '★', '✧', '❈'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      sparkle.innerText = symbol;

      // Color scheme matches the theme gradients (Fuchsias, gold, warm light pinks)
      const colors = ['#FF66B2', '#FFE082', '#FF80C0', '#FFA6D2', '#FFC2DD'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 14 + 10; // 10px to 24px
      const rotation = Math.random() * 360;

      sparkle.style.color = color;
      sparkle.style.fontSize = `${size}px`;
      sparkle.style.left = `${e.clientX + window.scrollX}px`;
      sparkle.style.top = `${e.clientY + window.scrollY}px`;
      sparkle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

      // Drift physics (random side floating & upward rise)
      const driftX = (Math.random() - 0.5) * 60; // horizontal drift
      const driftY = -40 - Math.random() * 40; // float upwards
      sparkle.style.setProperty('--drift-x', `${driftX}px`);
      sparkle.style.setProperty('--drift-y', `${driftY}px`);

      document.body.appendChild(sparkle);

      // Instantly remove from the DOM once the fading float animation ends
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Ambient Constant Background Sparkle/Stardust Emitter
  useEffect(() => {
    const spawnBgStar = () => {
      const star = document.createElement('div');
      star.className = 'bg-sparkle';

      // Soft stars and sparkles symbols
      const symbols = ['✦', '✧', '★'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      star.innerText = symbol;

      // Color scheme limited strictly to white and soft light pinks
      const colors = ['#FFFFFF', '#FFE4F1', '#FFC2DD', '#FFA6D2', '#FFF1F8'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 5; // delicate 5px to 13px size
      const left = Math.random() * 100; // anywhere horizontally
      const top = Math.random() * 100; // anywhere vertically

      star.style.color = color;
      star.style.fontSize = `${size}px`;
      star.style.left = `${left}vw`;
      star.style.top = `${top}vh`;
      star.style.position = 'fixed'; // fixed background prevents scrolling lag!

      const rotation = Math.random() * 360;
      star.style.transform = `rotate(${rotation}deg)`;

      // Soft background drifting physics
      const driftX = (Math.random() - 0.5) * 50; // horizontal float
      const driftY = -70 - Math.random() * 70; // floating upwards
      star.style.setProperty('--drift-x', `${driftX}px`);
      star.style.setProperty('--drift-y', `${driftY}px`);

      // Gentle, randomized fade/float duration (between 4s and 8s)
      const duration = Math.random() * 4 + 4;
      star.style.animationDuration = `${duration}s`;

      document.body.appendChild(star);

      // Instantly remove once the animation concludes
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // Pre-populate 25 background stars on initial load so the screen doesn't start empty
    for (let i = 0; i < 25; i++) {
      spawnBgStar();
    }

    // Periodically spawn a new background sparkle
    const interval = setInterval(spawnBgStar, 380);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const showcases = [
    {
      year: "2026",
      role: "UI/UX Designer | Full Stack Developer",
      projectTitle: "WOBBY",
      titleImage: wobbyTitleImg,
      description: "A mobile-based fitness ecosystem designed to solve two of the biggest problems in home-based exercise: high injury risk and low user retention. Most fitness apps act as passive video libraries, but Wobby acts as your digital personal trainer.",
      repoUrl: "https://github.com/Akihito0/WOBBY",
      items: ["Project Image 1", "Project Image 2", "Project Image 3", "Project Image 4"],
      techIcons: [
        { name: "VS Code", imgSrc: vsCodeIcon },
        { name: "React Native", imgSrc: reactNativeIcon },
        { name: "TypeScript", imgSrc: typescriptIcon },
        { name: "MediaPipe", imgSrc: mediapipeIcon },
        { name: "TensorFlow", imgSrc: tensorflowIcon },
        { name: "Python", imgSrc: pythonIcon },
        { name: "Swift", imgSrc: swiftIcon },
        { name: "Supabase", imgSrc: supabaseIcon }
      ],
      keyFeatures: [
        "AI-Powered Form Correction",
        "Versus Matchmaking",
        "Adaptive Fitness Plans",
        "Gamified Milestones",
        "Comprehensive Analytics",
        "Secure & Real-time Data Sync"
      ],
      howItWorks: [
        "Real-time Posture Analysis",
        "Personalized Workout Generation",
        "Interactive Rep Counting",
        "Progress Tracking"
      ]
    },
    {
      year: "2025",
      role: "UI/UX Designer | Frontend Developer",
      projectTitle: "SPOT",
      titleImage: spotTitleImg,
      description: "From snakes in your backyard to rare birds in the wild, SPOT helps you know what you see—instantly. Upload an image to analyze species, fetch geographical distributions, and log your unique sightings on an interactive map.",
      repoUrl: "https://github.com/Klipshin/SPOT",
      liveUrl: "https://spot22.vercel.app/",
      items: ["Project Image 5", "Project Image 6", "Project Image 7", "Project Image 8"],
      techIcons: [
        { name: "VS Code", imgSrc: vsCodeIcon },
        { name: "Next.js", imgSrc: nextjsIcon },
        { name: "TypeScript", imgSrc: typescriptIcon },
        { name: "CSS", imgSrc: cssIcon },
        { name: "SQL", imgSrc: sqlIcon },
        { name: "Gemini", imgSrc: geminiIcon },
        { name: "Leaflet", imgSrc: leafletIcon },
        { name: "Supabase", imgSrc: supabaseIcon }
      ],
      keyFeatures: [
        "Instant computer vision identification for thousands of wildlife species.",
        "Geographical map tracking and logging for unique flora and fauna sightings.",
        "Interactive social discovery feed with detailed species distribution data."
      ],
      howItWorks: [
        "Open the camera in SPOT and capture a photo of a plant or animal.",
        "Our model analyzes features and returns matching species details.",
        "Log your discovery to the global interactive map to share with others."
      ]
    },
    {
      year: "2026",
      role: "UI/UX Designer | Mobile Developer",
      projectTitle: "NEWT",
      titleImage: newtTitleImg,
      description: "An interactive learning app designed to support young children in developing essential skills through play. It features engaging educational games, kid-friendly stories with voice narration, and simple assessments that help track their learning progress.",
      repoUrl: "https://github.com/Klipshin/NEWT",
      items: ["Project Image 9", "Project Image 10", "Project Image 11", "Project Image 12"],
      techIcons: [
        { name: "VS Code", imgSrc: vsCodeIcon },
        { name: "Flutter", imgSrc: flutterIcon },
        { name: "Dart", imgSrc: dartIcon }
      ],
      keyFeatures: [
        "Interactive educational mini-games built specifically for child development.",
        "Immersive children stories featuring full voice narration and sound effects.",
        "Simple skill assessments to track learning progress with parent dashboard."
      ],
      howItWorks: [
        "Select a category such as reading, math, or logic from the main menu.",
        "Engage with games and narrated stories designed for cognitive development.",
        "View complete analytics and progression charts inside the parent panel."
      ]
    }
  ];

  const handlePrevShowcase = () => {
    setActiveShowcase((prev) => (prev > 0 ? prev - 1 : 0));
    setActiveDropdown(null);
  };

  const handleNextShowcase = () => {
    setActiveShowcase((prev) => (prev < 2 ? prev + 1 : 2));
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={twtIcon} alt="twt" />
            <span>twt</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#more">More</a></li>
          </ul>
          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#6C1E45" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#FFE0EF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
            <button className="nav-button">
              Let's Connect! <img src={navIcon} alt="icon" />
            </button>
          </div>
        </div>
      </nav>
      <section id="hero">
        <div className="hero-left-col">
          <p className="hero-greeting">Hi! I am</p>
          <h1 className="hero-name">
            <span>{typedLine1}</span>
            {typedLine1 && !typedLine2 && <span className="typewriter-cursor"></span>}
            <br />
            <span>{typedLine2}</span>
            {typedLine2 && <span className="typewriter-cursor"></span>}
          </h1>
          <div className="hero-line"></div>
          <p className="hero-role">UI/UX Designer | Web and Mobile Developer | Artist</p>
          <button className="hero-btn">
            MORE ABOUT ME <img src={moreIcon} alt="more" />
          </button>
        </div>
      </section>

      <section id="about" className="scroll-reveal">
        <div className="about-right-col">
          <h2 className="about-me-title">
            <span className="about-dark">About </span>
            <span className="about-pink">Me</span>
          </h2>
          <p className="about-desc-1">
            I am currently a 3rd year student studying<br />
            <span className="hero-course">BS in Computer Engineering</span> at<br />
            <span className="hero-school">Cebu Institute of Technology - University.</span>
          </p>
          <div className="hero-line"></div>
          <p className="about-desc-2">
            My core focus is to bridge the gap between design and development.
            I don't just mock up screens—I engineer clean, reusable UI components
            and frontend infrastructure that actually scale without losing their
            visual polish.
          </p>
          <div className="hero-line"></div>
          <div className="about-tags">
            <span className="about-tag">UI/UX Designer</span>
            <span className="about-tag">Frontend Developer</span>
            <span className="about-tag">Web and Mobile Developer</span>
            <span className="about-tag">Artist</span>
          </div>
        </div>
      </section>

      <section id="experiences" className="experiences-section scroll-reveal">
        <h2 className="experiences-title">EXPERIENCES</h2>
        <div className="experiences-tabs">
          <button
            className={`experience-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <img src={activeTab === 'projects' ? folderIcon : folder0Icon} alt="Projects" className="tab-icon" />
            <span className="tab-text">Projects</span>
          </button>

          <button
            className={`experience-tab-btn ${activeTab === 'workshops' ? 'active' : ''}`}
            onClick={() => setActiveTab('workshops')}
          >
            <img src={activeTab === 'workshops' ? eventIcon : event0Icon} alt="Workshops/Events" className="tab-icon" />
            <span className="tab-text">Workshops/Events</span>
          </button>

          <button
            className={`experience-tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <img src={activeTab === 'tech' ? techIcon : tech0Icon} alt="Tech Stack" className="tab-icon" />
            <span className="tab-text">Tech Stack</span>
          </button>
        </div>
      </section>

      {activeTab === 'projects' && (
        <section id="projects" className="projects-vault scroll-reveal">
          <div className="vault-header scroll-reveal">
            <div className="vault-line"></div>
            <h2 className="vault-title">PROJECT VAULT</h2>
            <div className="vault-line"></div>
          </div>
          <p className="vault-subtitle">An archive of my recent works</p>

          <div className="vault-action-container scroll-reveal" style={{ marginBottom: '30px', marginTop: '20px' }}>
            <img src={hartIcon} alt="hart" className="vault-heart" />
            <a
              href="https://github.com/Twitzie"
              target="_blank"
              rel="noopener noreferrer"
              className="vault-github-btn"
            >
              <div className="github-icon-wrapper">
                <svg viewBox="0 0 16 16" width="22" height="22" fill="#FFFFFF">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <span className="github-btn-text">GitHub Profile</span>
            </a>
          </div>

          {/* Grid of Three Cards */}
          <div className="vault-cards-grid scroll-reveal">
            {/* Card 1: Wobby */}
            <div className="vault-project-card" onClick={() => {
              setActiveShowcase(0);
              setShowAllProjects(true);
              document.body.style.overflow = 'hidden';
            }}>
              <img src={card1Img} alt="Wobby Mockup" className="vault-project-card-standalone-img" />
              <h3 className="vault-project-card-title">WOBBY</h3>
            </div>

            {/* Card 2: Spot */}
            <div className="vault-project-card" onClick={() => {
              setActiveShowcase(1);
              setShowAllProjects(true);
              document.body.style.overflow = 'hidden';
            }}>
              <img src={spotLaptopImg} alt="Spot Mockup" className="vault-project-card-standalone-img" />
              <h3 className="vault-project-card-title">SPOT</h3>
            </div>

            {/* Card 3: Newt */}
            <div className="vault-project-card" onClick={() => {
              setActiveShowcase(2);
              setShowAllProjects(true);
              document.body.style.overflow = 'hidden';
            }}>
              <img src={newtPhoneImg} alt="Newt Mockup" className="vault-project-card-standalone-img" />
              <h3 className="vault-project-card-title">NEWT</h3>
            </div>
          </div>

          {/* Decorative click to view details banner */}
          <div className="vault-click-details-banner">
            <img src={viewpIcon} alt="view" className="banner-icon-normal" />
            <img src={viewp0Icon} alt="view" className="banner-icon-hover" />
            <span>CLICK TO VIEW DETAILS</span>
          </div>
        </section>
      )}

      {activeTab === 'workshops' && (
        <section id="workshops-content" className="workshops-vault">
          <div className="vault-header">
            <div className="vault-line"></div>
            <h2 className="vault-title">WORKSHOPS & EVENTS</h2>
            <div className="vault-line"></div>
          </div>
          <p className="vault-subtitle">A collection of workshops and events I attended</p>

          <button className="gallery-btn">
            VIEW GALLERY <img src={galleryIcon} alt="gallery" />
          </button>

          <div className="workshops-grid">
            <div className="workshop-card scroll-reveal">
              <div className="workshop-img-wrapper">
                <img src={googleIoPreview} alt="Google I/O Extended Cebu" className="workshop-img" />
              </div>
              <h3 className="workshop-title">Notion CIT-U Interlinked</h3>
              <p className="workshop-desc">📍Diane Residences, cebu City<br />📅 June 8, 2026</p>
            </div>
            <div className="workshop-card scroll-reveal">
              <div className="workshop-img-wrapper">
                <img src={hackathonPreview} alt="CIT-U Innovation Hackathon" className="workshop-img" />
              </div>
              <h3 className="workshop-title">AWS Community Day Cebu 2025</h3>
              <p className="workshop-desc">📍 University of the Philippines, Cebu City<br />📅 September 13, 2025</p>
            </div>
            <div className="workshop-card scroll-reveal">
              <div className="workshop-img-wrapper">
                <img src={uiuxPreview} alt="UI/UX Craft & Prototyping Seminar" className="workshop-img" />
              </div>
              <h3 className="workshop-title">UXPH Mini Cebu 2025</h3>
              <p className="workshop-desc">📍 University of San Carlos - Talamban Campus, Cebu City<br />📅 September 27, 2025</p>
            </div>
            <div className="workshop-card scroll-reveal">
              <div className="workshop-img-wrapper">
                <img src={gdscPreview} alt="GDSC Solution Challenge Workshop" className="workshop-img" />
              </div>
              <h3 className="workshop-title">GDG DevFest Cebu 2025</h3>
              <p className="workshop-desc">📍 Golden Peak Hotel, Cebu City<br />📅 November 30, 2025</p>
            </div>
            <div className="workshop-card scroll-reveal">
              <div className="workshop-img-wrapper">
                <img src={reactPreview} alt="Advanced React State Seminar" className="workshop-img" />
              </div>
              <h3 className="workshop-title">AWS Odyssey: Serverless Website Hosting with S3 & Lambda</h3>
              <p className="workshop-desc">📍 DOST Region 7 Innovation Hub, Cebu City<br />📅 February 28, 2026</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'tech' && (
        <section id="tech-content" className="tech-vault scroll-reveal">
          <div className="vault-header">
            <div className="vault-line"></div>
            <h2 className="vault-title">TECH STACK</h2>
            <div className="vault-line"></div>
          </div>
          <p className="vault-subtitle">Core technologies and frameworks I use to engineer digital solutions</p>

          <div className="tech-vault-card scroll-reveal">
            <div className="tech-marquee-container">
              <div className="tech-marquee-track">
                {/* First Set of Logos */}
                <div className="tech-tooltip-wrapper" data-tooltip="React Native">
                  <img src={reactNativeIcon} alt="React Native" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="TypeScript">
                  <img src={typescriptIcon} alt="TypeScript" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Next.js">
                  <img src={nextjsIcon} alt="Next.js" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="CSS">
                  <img src={cssIcon} alt="CSS" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Flutter">
                  <img src={flutterIcon} alt="Flutter" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Dart">
                  <img src={dartIcon} alt="Dart" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="TensorFlow">
                  <img src={tensorflowIcon} alt="TensorFlow" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="MediaPipe">
                  <img src={mediapipeIcon} alt="MediaPipe" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Python">
                  <img src={pythonIcon} alt="Python" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Supabase">
                  <img src={supabaseIcon} alt="Supabase" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="SQL">
                  <img src={sqlIcon} alt="SQL" className="tech-logo" />
                </div>

                {/* Duplicate Second Set of Logos for Infinite Loop */}
                <div className="tech-tooltip-wrapper" data-tooltip="React Native">
                  <img src={reactNativeIcon} alt="React Native" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="TypeScript">
                  <img src={typescriptIcon} alt="TypeScript" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Next.js">
                  <img src={nextjsIcon} alt="Next.js" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="CSS">
                  <img src={cssIcon} alt="CSS" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Flutter">
                  <img src={flutterIcon} alt="Flutter" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Dart">
                  <img src={dartIcon} alt="Dart" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="TensorFlow">
                  <img src={tensorflowIcon} alt="TensorFlow" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="MediaPipe">
                  <img src={mediapipeIcon} alt="MediaPipe" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Python">
                  <img src={pythonIcon} alt="Python" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="Supabase">
                  <img src={supabaseIcon} alt="Supabase" className="tech-logo" />
                </div>
                <div className="tech-tooltip-wrapper" data-tooltip="SQL">
                  <img src={sqlIcon} alt="SQL" className="tech-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Artworks Section */}
      <section id="more" className="artworks-section scroll-reveal">
        <div className="vault-header">
          <div className="vault-line"></div>
          <h2 className="vault-title">Artworks</h2>
          <div className="vault-line"></div>
        </div>
        <p className="vault-subtitle">A creative showcase of my digital designs, illustrations, and fine arts</p>

        <div className="artworks-grid">
          <div className="artwork-card scroll-reveal">
            <div className="artwork-img-wrapper">
              <div className="artwork-placeholder-bg g4">🎨</div>
            </div>
            <h3 className="artwork-title">Paintings</h3>
            <p className="artwork-category">Digital & Traditional Fine Arts</p>
          </div>
          <div className="artwork-card scroll-reveal">
            <div className="artwork-img-wrapper">
              <div className="artwork-placeholder-bg g1">✨</div>
            </div>
            <h3 className="artwork-title">Anime Art</h3>
            <p className="artwork-category">Illustrations & Character Designs</p>
          </div>
        </div>
      </section>

      {showAllProjects && (
        <div className="vault-fullscreen-overlay">
          <div className="vault-fullscreen-card">
            {/* Close Modal Button on Upper Right */}
            <button className="vault-close-modal-btn" onClick={() => {
              setShowAllProjects(false);
              document.body.style.overflow = ''; // Restore body scrolling
            }} aria-label="Close modal">
              ×
            </button>

            {/* The High-Fidelity Showcase Block */}
            <div className={`vault-showcase ${activeShowcase === 1 ? 'vault-showcase-reversed' : ''}`}>
              <div key={`scroll-panel-${activeShowcase}`} className={`showcase-scroll-panel showcase-fade ${activeShowcase === 1 ? 'showcase-scroll-panel-single' : ''}`}>
                {showcases[activeShowcase].items.map((item, index) => (
                  <div className={`showcase-item ${activeShowcase === 1 ? 'showcase-item-horizontal' : ''}`} key={index}>
                    <div className="showcase-img-placeholder">{item}</div>
                  </div>
                ))}
              </div>

              <div key={`right-content-${activeShowcase}`} className="showcase-right-content showcase-fade">
                <div className="specs-header-tags">
                  <span className="specs-tag-year">{showcases[activeShowcase].year}</span>
                  <span className="specs-tag-role">{showcases[activeShowcase].role}</span>
                </div>

                <div className="specs-title-card">
                  <img
                    src={showcases[activeShowcase].titleImage}
                    alt={showcases[activeShowcase].projectTitle}
                    className="specs-project-title-img"
                  />
                  <p className="specs-project-subtitle">{showcases[activeShowcase].projectSubtitle}</p>
                </div>

                <div className="specs-divider"></div>

                <p className="specs-description">{showcases[activeShowcase].description}</p>

                <div className="specs-buttons-row">
                  <div className="specs-btn-container">
                    <button
                      className={`specs-action-btn ${activeDropdown === 'features' ? 'active' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
                    >
                      Key Features
                    </button>
                    {activeDropdown === 'features' && (
                      <div className="specs-dropdown-content">
                        <ul className="specs-dropdown-list">
                          {showcases[activeShowcase].keyFeatures.map((point, idx) => (
                            <li key={idx} className="specs-dropdown-item">
                              <span className="specs-dropdown-bullet">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="specs-btn-container">
                    <button
                      className={`specs-action-btn ${activeDropdown === 'how' ? 'active' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === 'how' ? null : 'how')}
                    >
                      How It Works
                    </button>
                    {activeDropdown === 'how' && (
                      <div className="specs-dropdown-content">
                        <ul className="specs-dropdown-list">
                          {showcases[activeShowcase].howItWorks.map((point, idx) => (
                            <li key={idx} className="specs-dropdown-item">
                              <span className="specs-dropdown-bullet">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="specs-tech-stack">
                  {showcases[activeShowcase].techIcons.map((icon, idx) => (
                    <span className="tech-icon-wrapper" key={idx} data-tooltip={icon.name}>
                      {icon.imgSrc ? (
                        <img src={icon.imgSrc} alt={icon.name} className="tech-icon-img" />
                      ) : (
                        icon.svg
                      )}
                    </span>
                  ))}
                </div>

                <div className="specs-actions-row">
                  <a href={showcases[activeShowcase].repoUrl} target="_blank" rel="noopener noreferrer" className="specs-repo-btn">
                    <img src={gitHubIcon} alt="github" className="specs-repo-btn-img" />
                    <span>REPOSITORY</span>
                  </a>
                  {showcases[activeShowcase].liveUrl && (
                    <a href={showcases[activeShowcase].liveUrl} target="_blank" rel="noopener noreferrer" className="specs-demo-btn">
                      <img src={webpageIcon} alt="demo" className="specs-repo-btn-img" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
