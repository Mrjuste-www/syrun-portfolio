import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Shield,
  Code2,
  Target,
  Dumbbell,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Cpu,
  Mail
} from "lucide-react";

const projects = [
  {
    name: "FINORA",
    category: "Projet web",
    description:
      "Projet web créé et développé par mes soins. Découvre le résultat sur le site.",
    url: "https://finora-hq.vercel.app/",
    status: "En ligne"
  },
  {
    name: "MOHAMED ELKOUT",
    category: "Projet web",
    description:
      "Projet réalisé en tant que développeur et créateur. Consulte le site pour découvrir le résultat.",
    url: "https://mohamedelkout.com/",
    status: "En ligne"
  },
  {
    name: "Projet personnel",
    category: "À venir",
    description:
      "Un futur projet à ajouter ici au fil de mes apprentissages et expérimentations.",
    url: null,
    status: "À venir"
  },
  {
    name: "Cyber Lab",
    category: "Cybersécurité",
    description:
      "Un espace destiné à présenter mes futurs exercices, CTF et expérimentations en cybersécurité.",
    url: null,
    status: "En préparation"
  },
  {
    name: "Next Project",
    category: "Développement",
    description:
      "De nouvelles idées et réalisations viendront compléter mon portfolio.",
    url: null,
    status: "À venir"
  }
];

const skills = [
  "Développement web",
  "HTML / CSS",
  "JavaScript",
  "Linux",
  "Réseaux",
  "Cybersécurité",
  "Résolution de problèmes",
  "Travail en équipe"
];

const commands = {
  help: "Commandes disponibles : about, skills, projects, goals, contact, clear",
  about: "SYRUN — Nathan Delorme, 17 ans. Étudiant en BAC PRO CIEL et passionné par l'informatique et la cybersécurité.",
  skills: "Développement web • Linux • Réseaux • Cybersécurité • Travail en équipe.",
  projects: "FINORA — finora-hq.vercel.app | MOHAMED ELKOUT — mohamedelkout.com",
  goals: "Objectif : devenir pentester, développer mon expérience et créer ma propre entreprise.",
  contact: "Retrouve-moi sur LinkedIn : linkedin.com/in/nathan-delorme-18452b397"
};

function TerminalBox() {
  const [history, setHistory] = useState([
    "SYRUN OS [Version 1.0]",
    "Bienvenue dans le terminal de SYRUN.",
    "Tape help pour afficher les commandes disponibles."
  ]);
  const [command, setCommand] = useState("");

  function runCommand(event) {
    event.preventDefault();
    const input = command.trim().toLowerCase();

    if (!input) return;

    if (input === "clear") {
      setHistory([]);
    } else {
      setHistory((previous) => [
        ...previous,
        `visitor@SYRUN:~$ ${input}`,
        commands[input] || `Commande inconnue : ${input}. Tape help pour obtenir de l'aide.`
      ]);
    }

    setCommand("");
  }

  return (
    <div className="terminal">
      <div className="terminal-top">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span><Terminal size={14} /> syrun-terminal</span>
        <span className="terminal-live">● ONLINE</span>
      </div>

      <div className="terminal-content">
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <form onSubmit={runCommand} className="terminal-form">
          <label htmlFor="terminal-input">visitor@SYRUN:~$</label>
          <input
            id="terminal-input"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Commande du terminal"
          />
        </form>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    ["Accueil", "#home"],
    ["À propos", "#about"],
    ["Compétences", "#skills"],
    ["Projets", "#projects"],
    ["Objectifs", "#goals"],
    ["Contact", "#contact"]
  ];

  return (
    <div className="app-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a className="brand" href="#home" aria-label="SYRUN accueil">
          SYR<span>UN</span><i>.</i>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Me contacter <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="status-line">
              <span className="status-dot" />
              DISPONIBLE POUR APPRENDRE ET CRÉER
            </div>

            <p className="eyebrow">PORTFOLIO PERSONNEL — 2026</p>

            <h1>
              Je suis <span>SYRUN</span>
              <br />
              Je construis
              <br />
              <span className="outline-text">le futur.</span>
            </h1>

            <p className="hero-description">
              Moi, c'est Nathan Delorme. Étudiant en informatique, passionné
              par le développement et la cybersécurité. Mon objectif :
              progresser, relever des défis et devenir pentester.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Découvrir mes projets <ArrowUpRight size={17} />
              </a>
              <a href="#about" className="button-secondary">
                En savoir plus
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Mrjuste-www" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-delorme-18452b397/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://www.codingame.com/profile/3a750ac9710ad0d3635b2a2da698af192682056"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> CodinGame
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="avatar-card">
              <div className="avatar-symbol">
                <Shield size={76} strokeWidth={1.2} />
                <span>S</span>
              </div>
              <p className="avatar-name">SYRUN</p>
              <p className="avatar-role">CYBERSECURITY ENTHUSIAST</p>
              <div className="avatar-bottom">
                <span>FRANCE</span>
                <span>17 YEARS OLD</span>
              </div>
            </div>
            <div className="floating-tag tag-top">
              <Cpu size={15} /> LEARN // BUILD
            </div>
            <div className="floating-tag tag-bottom">
              <span className="status-dot" /> FUTURE PENTESTER
            </div>
          </motion.div>

          <a className="scroll-indicator" href="#about">
            SCROLL TO EXPLORE <ChevronDown size={15} />
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — QUI SUIS-JE ?</p>
            <h2>Apprendre. <span>Comprendre.</span> Construire.</h2>
          </div>

          <div className="about-grid">
            <div className="about-main panel">
              <div className="panel-icon"><Terminal /></div>
              <h3>À propos de moi</h3>
              <p>
                J'ai 17 ans et je suis actuellement en Terminale BAC PRO CIEL
                (Cybersécurité, Informatique et réseaux, Électronique) au
                lycée professionnel de l'Argensol, à Orange.
              </p>
              <p>
                Je souhaite poursuivre mes études dans le domaine de la
                cybersécurité, avec l'objectif d'intégrer un Bachelor
                Cybersécurité à Ynov Campus Aix.
              </p>
              <p>
                À long terme, je veux devenir pentester, acquérir une solide
                expérience sur le terrain et, plus tard, créer ma propre
                entreprise.
              </p>
            </div>

            <div className="about-side">
              <div className="panel mini-panel">
                <Target />
                <h3>Mon état d'esprit</h3>
                <p>Ambitieux, compétitif, déterminé. J'aime progresser et me fixer de nouveaux objectifs.</p>
              </div>
              <div className="panel mini-panel">
                <Dumbbell />
                <h3>Discipline & sport</h3>
                <p>
                  Je pratique le rugby depuis 6 ans. Je joue en troisième ligne
                  au Rugby Club Orangeois et je vais aussi à la salle de sport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 — MON UNIVERS</p>
            <h2>Compétences & <span>apprentissage.</span></h2>
            <p className="section-intro">
              Des connaissances que je développe au fil de ma formation,
              de mes projets et de mes expérimentations.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="skill-index">0{index + 1}</span>
                <Code2 size={20} />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
          <p className="small-note">
            Cette liste présente mes domaines d'intérêt et d'apprentissage ;
            elle ne constitue pas une évaluation de niveau.
          </p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 — MES RÉALISATIONS</p>
            <h2>Des idées qui <span>prennent vie.</span></h2>
            <p className="section-intro">
              Quelques projets et espaces d'expérimentation qui illustrent
              mon parcours.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="project-top">
                  <span className="project-number">PROJECT / 0{index + 1}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-icon"><Code2 size={30} /></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                    Voir le projet <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="project-upcoming">Bientôt disponible</span>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <p className="eyebrow">04 — MON PARCOURS</p>
            <h2>Une progression <span>continue.</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-point" />
              <p className="timeline-date">ACTUELLEMENT</p>
              <h3>Terminale BAC PRO CIEL</h3>
              <p>Lycée professionnel de l'Argensol — Orange.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-point" />
              <p className="timeline-date">PROCHAINE ÉTAPE ENVISAGÉE</p>
              <h3>Bachelor Cybersécurité</h3>
              <p>Projet de poursuite d'études à Ynov Campus Aix.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-point" />
              <p className="timeline-date">OBJECTIF À LONG TERME</p>
              <h3>Pentester & entrepreneur</h3>
              <p>Développer mon expertise, gagner en expérience et créer mon entreprise.</p>
            </div>
          </div>
        </section>

        <section className="section terminal-section">
          <div className="section-heading">
            <p className="eyebrow">05 — INTERFACE INTERACTIVE</p>
            <h2>Explore mon <span>terminal.</span></h2>
            <p className="section-intro">
              Entre une commande pour découvrir quelques informations sur moi.
            </p>
          </div>
          <TerminalBox />
        </section>

        <section className="section goals-section" id="goals">
          <div className="goal-content">
            <p className="eyebrow">06 — LA SUITE</p>
            <h2>Le meilleur reste <span>à construire.</span></h2>
            <p>
              Je veux continuer à apprendre, développer mes compétences
              techniques, participer à des projets concrets et relever
              des défis toujours plus ambitieux.
            </p>
            <div className="goal-tags">
              <span>CYBERSECURITY</span>
              <span>PENTESTING</span>
              <span>DEVELOPMENT</span>
              <span>ENTREPRENEURSHIP</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">07 — CONTACT</p>
            <h2>On construit quelque chose <span>ensemble ?</span></h2>
            <p className="section-intro">
              Pour échanger autour du développement, de la cybersécurité
              ou de projets : retrouve-moi sur mes profils.
            </p>
          </div>

          <div className="contact-links">
            <a href="https://github.com/Mrjuste-www" target="_blank" rel="noreferrer">
              <Github /> GitHub <ArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-delorme-18452b397/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn <ArrowUpRight />
            </a>
            <a
              href="https://www.codingame.com/profile/3a750ac9710ad0d3635b2a2da698af192682056"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 /> CodinGame <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">SYR<span>UN</span><i>.</i></a>
        <p>© {new Date().getFullYear()} Nathan Delorme — SYRUN. Tous droits réservés.</p>
        <a href="#home">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;