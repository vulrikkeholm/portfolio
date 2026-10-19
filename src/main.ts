import _ from "lodash";
import "./styles.css";
import { site } from "./content";

const app = document.querySelector<HTMLElement>("#app")!;

const project = site.projects.find((item) => item.slug === "bachelor")!;
const isProjectPage =
  location.pathname.replace(/\/+$/, "") === "/projects/bachelor";

if (isProjectPage) {
  document.title = `${project.title} | ${site.name}`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", project.description);

  app.innerHTML = `
    <header class="site-header">
      <a class="wordmark" href="/#top" aria-label="${_.escape(site.name)} — home">VU<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="/#projects">Projects</a>
        <a href="/#experience">Experience</a>
        <a href="/#skills">Skills</a>
      </nav>
    </header>
    <main id="top" class="project-page">
      <a class="back-link" href="/#projects"><span aria-hidden="true">←</span> Back to projects</a>
      <section class="project-hero" aria-labelledby="project-title">
        <p class="eyebrow"><span class="status-dot"></span> ${_.escape(project.type)}</p>
        <h1 id="project-title">${_.escape(project.title)}</h1>
        <p class="project-lead">${_.escape(project.description)}</p>
        <a class="text-link" href="${_.escape(project.repository)}" target="_blank" rel="noopener noreferrer">
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>
      <section class="project-details" aria-label="Project details">
        <div class="project-detail-block">
          <p class="eyebrow">REPORT HIGHLIGHTS</p>
          <ul class="project-highlights">
            ${project.highlights.map((highlight) => `<li>${_.escape(highlight)}</li>`).join("")}
          </ul>
        </div>
        <div class="project-detail-block">
          <p class="eyebrow">TECHNOLOGIES</p>
          <ul class="project-tags">
            ${project.technologies.map((technology) => `<li>${_.escape(technology)}</li>`).join("")}
          </ul>
        </div>
      </section>
      <section class="project-note">
        <p class="eyebrow">TEAM &amp; SCOPE</p>
        <p>${_.escape(project.team)}</p>
        <p>${_.escape(project.scopeNote)}</p>
        <a class="performance-link" href="${_.escape(project.repository)}" target="_blank" rel="noopener noreferrer">
          Explore the code and setup instructions on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
    <footer>
      <span>${_.escape(site.name)}</span>
      <span>Curiosity across disciplines.</span>
    </footer>
  `;
} else {
  document.title = `${site.name} | Cybersecurity & Computer Technology`;

  app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${_.escape(site.name)} — home">VU<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
    </nav>
  </header>
  <main id="top">
    <section class="hero" id="about" aria-labelledby="intro-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Technology, music &amp; mentorship</p>
        <h1 id="intro-heading">Different disciplines. <span>One curious mind.</span></h1>
        <p class="introduction">
          I’m <strong>${_.escape(site.name)}</strong>, currently completing a
          <strong>bachelor’s degree in ${_.escape(site.degree)}</strong>.
          ${_.escape(site.introduction)}
        </p>
        <a class="text-link" href="#experience">Get to know my experience <span aria-hidden="true">↓</span></a>
      </div>
      <aside class="profile-card" aria-label="Profile and education">
        <div class="card-topline"><span>PROFILE</span><span>01 / 01</span></div>
        <img
          class="profile-photo"
          src="/valdemar-ulrikkeholm.jpg"
          alt="Portrait of ${_.escape(site.name)}"
          width="768"
          height="1151"
        />
        <p class="card-name">${_.escape(site.name)}</p>
        <p class="card-caption">Technology · Music · Mentorship</p>
        <div class="card-divider"></div>
        <p class="card-label">EDUCATION</p>
        <p class="card-degree">${_.escape(site.degree)}</p>
      </aside>
    </section>
    <section class="experience-section" id="experience" aria-labelledby="experience-heading">
      <div class="section-heading">
        <p class="eyebrow">EXPERIENCE</p>
        <h2 id="experience-heading">A career shaped by people, performance, and technology.</h2>
        <p class="section-intro">From helping students find their path to performing on stage, I value teamwork, curiosity, and clear communication.</p>
      </div>
      <ol class="experience-list">
        ${site.experience
          .map(
            (role) => `
              <li class="experience-card">
                <div class="experience-topline">
                  <h3>${_.escape(role.role)}</h3>
                  <span>${_.escape(role.period)}</span>
                </div>
                <p class="experience-organization">${_.escape(role.organization)}</p>
                <p class="experience-description">${_.escape(role.description)}</p>
                ${
                  role.videoUrl
                    ? `<a class="performance-link" href="${_.escape(role.videoUrl)}" target="_blank" rel="noopener noreferrer">Watch a performance on YouTube <span aria-hidden="true">↗</span></a>`
                    : ""
                }
              </li>
            `,
          )
          .join("")}
      </ol>
    </section>
    <section class="projects-section" id="projects" aria-labelledby="projects-heading">
      <div class="section-heading">
        <p class="eyebrow">SELECTED PROJECTS</p>
        <h2 id="projects-heading">Building software with security in mind.</h2>
        <p class="section-intro">A bachelor project exploring the foundations of secure communication.</p>
      </div>
      <article class="project-card">
        <div class="project-card-number" aria-hidden="true">01</div>
        <div class="project-card-content">
          <p class="project-card-type">${_.escape(project.type)}</p>
          <h3>${_.escape(project.title)}</h3>
          <p>${_.escape(project.description)}</p>
          <ul class="project-tags">
            ${project.technologies.map((technology) => `<li>${_.escape(technology)}</li>`).join("")}
          </ul>
          <a class="project-card-link" href="/projects/${_.escape(project.slug)}">
            Explore project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </section>
    <section class="skills-section" id="skills" aria-labelledby="skills-heading">
      <div class="section-heading">
        <p class="eyebrow">TECHNICAL TOOLKIT</p>
        <h2 id="skills-heading">Tools I’ve worked with.</h2>
        <p class="section-intro">A growing toolkit across programming, web development, security, and collaboration.</p>
      </div>
      <div class="skill-groups">
        ${site.skills
          .map(
            (group) => `
              <section class="skill-group" aria-label="${_.escape(group.category)}">
                <h3>${_.escape(group.category)}</h3>
                <ul>
                  ${group.items.map((skill) => `<li>${_.escape(skill)}</li>`).join("")}
                </ul>
              </section>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="education-section" id="education" aria-labelledby="education-heading">
      <p class="eyebrow">EDUCATION</p>
      <div class="education-content">
        <h2 id="education-heading">${_.escape(site.degree)}</h2>
        <p>Aalborg University in Copenhagen · 2023–2026</p>
        <h3 class="music-education-heading">Earlier studies in music</h3>
        <ul class="education-list">
          ${site.education
            .map(
              (item) => `
                <li>
                  <span class="education-period">${_.escape(item.period)}</span>
                  <span>
                    <strong>${_.escape(item.qualification)}</strong>
                    <span class="education-institution">${_.escape(item.institution)}</span>
                  </span>
                </li>
              `,
            )
            .join("")}
        </ul>
      </div>
    </section>
  </main>
  <footer>
    <span>${_.escape(site.name)}</span>
    <span>Curiosity across disciplines.</span>
  </footer>
`;
}
