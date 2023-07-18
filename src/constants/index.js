import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    nlp,
    mern,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphics Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "VIPPRAFEST.PVT.LTD",
      icon: carrent,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Deal-Finder",
      icon: jobit,
      iconBg: "#E6DEDD",
      date: "March 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Code Developer",
      company_name: "R&D Named Data Networking",
      icon: tripguide,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "MERN-Portfolio",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "VIPPRAFEST.PVT.LTD",
      description:
        "It is a Construction Company website, made using React js, My internship Project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/Piyushkumar1307?tab=repositories",
    },
    {
      name: "Deal-Finder",
      description:
        "Website that finds deals online. made with the MERN stack. Features include user and seller authentication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
    
      ],
      image: jobit,
      source_code_link: "https://github.com/Piyushkumar1307?tab=repositories",
    },
    {
      name: "R&D Named Data Networking",
      description:
        "Energy efficient routing algorithm in Named Data Networking",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/Piyushkumar1307?tab=repositories",
    },
    {
      name: "Text-Summarizer",
      description:
        "Text Summarizer using NLP(Natural Language Processing) Libraries",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLTK",
          color: "green-text-gradient",
        },
        {
          name: "mtranslate",
          color: "blue-text-gradient",
        },
        {
          name: "pyspellchecker",
          color: "green-text-gradient",
        },
        
      ],
      image: nlp,
      source_code_link: "https://github.com/Piyushkumar1307?tab=repositories",
    },
    {
      name: "MERN-Portfolio",
      description:
        "Portfolio using MERN stack.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },        
      ],
      image: mern,
      source_code_link: "https://github.com/Piyushkumar1307?tab=repositories",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };