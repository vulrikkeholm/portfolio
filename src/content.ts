type Site = {
  name: string;
  degree: string;
  introduction: string;
  focusAreas: string[];
  projects: {
    slug: string;
    title: string;
    type: string;
    description: string;
    repository: string;
    technologies: string[];
    highlights: string[];
    team: string;
    scopeNote: string;
  }[];
  skills: { category: string; items: string[] }[];
  experience: {
    role: string;
    organization: string;
    period: string;
    description: string;
    videoUrl?: string;
  }[];
  otherExperience: {
    role: string;
    organization: string;
    period: string;
    description: string;
    videoUrl?: string;
  }[];
  education: { qualification: string; institution: string; period: string }[];
};

export const site: Site = {
  name: "Valdemar Ulrikkeholm",
  degree: "Cyber- og computerteknologi",
  introduction:
    "My studies have given me practical experience with software development, secure messaging, and web technologies.",
  focusAreas: [
    "Cybersecurity",
    "Software and systems",
    "Privacy and digital trust",
  ],
  projects: [
    {
      slug: "bachelor",
      title: "Secure Messaging System",
      type: "Team bachelor project · Aalborg University",
      description:
        "A browser-based messaging application developed with privacy at its core. The project explores how modern cryptographic protocols and careful system design can protect messages and user data.",
      repository: "https://github.com/vulrikkeholm/bachelor",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Socket.IO",
        "Double Ratchet",
        "AES-GCM",
      ],
      highlights: [
        "Double Ratchet for end-to-end encryption in transit",
        "Argon2id password hashing and TOTP multi-factor authentication",
        "AES-GCM encryption for locally stored messages",
        "Unit and acceptance tests; Semgrep reported zero findings in the documented scan",
      ],
      team: "Developed with Vera Kirk Jeppesen and Sebastian Wendt Leerbæk.",
      scopeNote:
        "The implemented application supports one-to-one conversations. The report identifies group chats and dynamic security testing as possible future work.",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "C", "TypeScript", "SQL"],
    },
    { category: "Web development", items: ["React", "HTML", "CSS", "Vite"] },
    {
      category: "Security and testing",
      items: ["Semgrep", "Wireshark", "Pytest"],
    },
    {
      category: "Tools and ways of working",
      items: ["GitHub", "Railway", "ML / AI", "Scrum"],
    },
  ],
  experience: [
    {
      role: "Student academic adviser",
      organization: "Electronic Systems, Aalborg University in Copenhagen",
      period: "2024–present",
      description:
        "Supporting fellow students with guidance and helping them find their way through their studies.",
    },
  ],
  otherExperience: [
    {
      role: "Music teacher and instructor",
      organization: "Tivoli Guard",
      period: "2025–present",
      description:
        "Teaching and mentoring young musicians, drawing on years of professional performance and music education.",
    },
    {
      role: "Professional orchestral musician",
      organization: "Orchestras and opera companies in Denmark and abroad",
      period: "Selected credits",
      description:
        "Performed with ensembles including Den Norske Opera & Ballet, Aalborg Symphony Orchestra, Sønderjyllands Symfoniorkester, and Arctic Philharmonic.",
      videoUrl: "https://youtu.be/9fh-dtQgBR8?si=7jWuM7_RpLdlxzDz",
    },
  ],
  education: [
    {
      qualification: "Soloist programme",
      institution: "The Royal Academy of Music, Aarhus",
      period: "2017–2020",
    },
    {
      qualification: "Advanced Music Studies Certificate",
      institution: "Carnegie Mellon University, Pittsburgh",
      period: "2017–2018",
    },
    {
      qualification: "Master’s in Music Education, classical flute",
      institution: "The Royal Academy of Music, Aarhus",
      period: "2014–2017",
    },
    {
      qualification: "Postgraduate year",
      institution: "Royal Academy of Music, London",
      period: "2014–2015",
    },
    {
      qualification: "Bachelor of Music, classical flute",
      institution: "Det Jyske Musikkonservatorium, Aarhus",
      period: "2011–2014",
    },
  ],
};
