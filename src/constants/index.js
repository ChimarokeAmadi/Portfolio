import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/foodieland.jpeg";
import project4 from "../assets/projects/sounddzign.png";
import project3 from "../assets/projects/portfolio.png";
import project5 from "../assets/projects/calculator.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With over a year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly  applications. With a year of experience, I have worked with a variety of technologies, including React, Next.js, React native etc. My journey in frontend development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    date: "March, 2024 - May, 2024",
    role: "Intern",
    company: "Oasis Infobyte",
    description: `Implemented CSS and JavaScript technologies such as React and Bootstrap to create delightful user experience on various web and mobile apps`,
    technologies: ["Javascript", "React.js", "React-Native"],
  },
  {
    date: "February,2023 - February, 2024",
    role: "Intern",
    company: "MyAza",
    description: `Implemented frontend development frameworks like react as well as frontend development principles like responsive design to provide enticing and user-friendly user interfaces and helped with code documentation, unit testing and APIs`,
    technologies: ["HTML", "CSS", "ReactJs", "React Native"],
  },

];

export const PROJECTS = [
  {
    title: "FoodieLand website",
    image: project2,
    description:
      "A website for displaying and learning food recipes, with dynamic webpages.",
    technologies: ["Nextjs", "Tailwind", "Typescript"],
    link: 'https://foodieland-uju7.vercel.app/'
  },
  {
    title: "Real Estate Website",
    image: project1,
    description:
      "A fully functional Real estate website with features like product listing, company features, multi-page routing and messaging features.",
    technologies: ["HTML", "Tailwind", "React"],
    link: 'https://prop-pal-rho.vercel.app/'
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: 'https://portfolio-two-ruddy-64.vercel.app/'
  },

  {
    title: "SoundDzign website",
    image: project4,
    description:
      "A simple website for learning about music production.",
    technologies: ["HTML", "CSS", "Firebase"],
    link: 'https://sounddzign-one.vercel.app/'
  },
  {
    title: "Calculator App",
    image: project5,
    description:
      "An exciting Calculator web app that allows users to solve mathematical problems both on mobile and desktop devices",
    technologies: ["HTML", "Tailwind", "React"],
    link: 'https://calculator-app-sandy-eight.vercel.app/'
  },
];

export const CONTACT = {
  address: "1 Bankers' close 1st Avenue, Calabar, 54022 ",
  phoneNo: "+234 816 550 9263",
  email: "chirokeamadi@gmail.com",
};
