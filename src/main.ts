import _ from "lodash";
import "./styles.css";
import { site } from "./content";

const app = document.querySelector<HTMLElement>("#app")!;

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${_.escape(site.name)} — home">VU<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#focus">Interests</a>
      <a href="#education">Education</a>
    </nav>
  </header>
  <main id="top">
    <section class="hero" id="about" aria-labelledby="intro-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Cybersecurity &amp; computer technology</p>
        <h1 id="intro-heading">Technology should be <span>secure by design.</span></h1>
        <p class="introduction">
          I’m <strong>${_.escape(site.name)}</strong>, a graduate with a
          <strong>${_.escape(site.degree)}</strong>. ${_.escape(site.introduction)}
        </p>
        <a class="text-link" href="#focus">A little about what interests me <span aria-hidden="true">↓</span></a>
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
        <p class="card-caption">Cybersecurity · Computer technology</p>
        <div class="card-divider"></div>
        <p class="card-label">EDUCATION</p>
        <p class="card-degree">${_.escape(site.degree)}</p>
      </aside>
    </section>
    <section class="focus-section" id="focus" aria-labelledby="focus-heading">
      <div class="section-heading">
        <p class="eyebrow">AREAS OF INTEREST</p>
        <h2 id="focus-heading">Curious about the systems behind the screen.</h2>
        <p class="section-intro">A few of the areas I’m drawn to as I keep learning and building.</p>
      </div>
      <ul class="focus-list">
        ${site.focusAreas
          .map(
            (area, index) => `
              <li class="focus-card">
                <span class="focus-number">0${index + 1}</span>
                <h3>${_.escape(area)}</h3>
                <span class="focus-arrow" aria-hidden="true">↗</span>
              </li>
            `,
          )
          .join("")}
      </ul>
    </section>
    <section class="education-section" id="education" aria-labelledby="education-heading">
      <p class="eyebrow">EDUCATION</p>
      <div class="education-content">
        <h2 id="education-heading">${_.escape(site.degree)}</h2>
        <p>A foundation in cyber and computer technology, and a starting point for a career in a connected world.</p>
      </div>
      <span class="education-mark" aria-hidden="true">BSc</span>
    </section>
  </main>
  <footer>
    <span>${_.escape(site.name)}</span>
    <span>Curiosity, security, and technology.</span>
  </footer>
`;
