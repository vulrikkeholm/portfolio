type Site = {
  name: string;
  degree: string;
  introduction: string;
  focusAreas: string[];
  skills: { category: string; items: string[] }[];
  experience: {
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
    "I’m completing my degree at Aalborg University in Copenhagen. Alongside my technology studies, I bring a long background in music—as a performer, teacher, and mentor.",
  focusAreas: [
    "Cybersecurity",
    "Software and systems",
    "Privacy and digital trust",
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
  ],
};
