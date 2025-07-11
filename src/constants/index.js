import project1 from "../assets/projects/project1 Small.png";
import project2 from "../assets/projects/foodieland Small.png";
import project4 from "../assets/projects/sounddzign Small.png";
import project3 from "../assets/projects/portfolio Small.png";
import project5 from "../assets/projects/fairsure.jpeg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With over 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly  applications. With 4 years of experience, I have worked with a variety of technologies, including React, Next.js, React native etc. My journey in frontend development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
	{
		date: "Feb 2024 – Present",
		role: "Front-End Developer",
		company: "Devwyre, Abuja, Nigeria",
		description: `• Architected and developed scalable, high-performance React.js applications, ensuring optimal responsiveness across devices.
  • Engineered efficient API integration patterns to optimize data fetching, caching, and state management.
  • Led performance optimizations, improving Core Web Vitals and user engagement.
  • Designed reusable UI components to accelerate development and maintain scalable architecture.
  • Established best practices for documentation, code maintainability, and unit testing.`,
		technologies: ["React.js", "JavaScript", "HTML", "CSS"],
	},
	{
		date: "Mar 2021 – Feb 2024",
		role: "Front-End Developer",
		company: "MyAza, Nigeria",
		description: `• Developed and maintained enterprise-level React.js applications focusing on performance and scalability.
  • Implemented micro-frontend architecture for modular, independently deployed UI components.
  • Collaborated with UI/UX teams to build pixel-perfect, accessible interfaces.
  • Built client-side caching strategies using Redis and other tools for enhanced performance.
  • Integrated RESTful APIs and Microservices for seamless frontend-backend communication.
  • Spearheaded automated testing and CI/CD pipelines to streamline deployments.`,
		technologies: [
			"React.js",
			"Micro-Frontends",
			"Redis",
			"REST APIs",
			"JavaScript",
		],
	},
	{
		date: "Dec 2018 – Nov 2021",
		role: "Front-End Developer",
		company: "PropPal Limited, Lagos, Nigeria",
		description: `• Developed and optimized the company platform using Next.js, significantly boosting SEO and performance metrics.
  • Implemented state management using Redux and Context API for improved maintainability.
  • Established modular, component-driven architecture to enhance code scalability.
  • Ensured responsive cross-device design and collaborated closely with backend teams on RESTful APIs.
  • Led code reviews and mentored junior developers to promote engineering best practices.`,
		technologies: ["Next.js", "React.js", "Context API", "Redux", "REST APIs"],
	},
	{
		date: "Feb 2023 – Feb 2024",
		role: "Intern",
		company: "MyAza, Nigeria",
		description: `• Contributed to frontend development using React.js, ensuring responsive, user-friendly interfaces.
  • Supported unit testing, documentation, and API integration efforts.
  • Assisted in implementing scalable UI components and adhering to coding standards.`,
		technologies: ["HTML", "CSS", "React.js", "React Native"],
	},
	{
		date: "Mar 2018 – May 2021",
		role: "Intern",
		company: "Oasis Infobyte",
		description: `• Utilized HTML, CSS, and JavaScript libraries such as React and Bootstrap to build interactive web and mobile interfaces.
  • Participated in UI implementation tasks and collaborated on feature delivery.`,
		technologies: ["JavaScript", "React.js", "Bootstrap", "React Native"],
	},
];

export const PROJECTS = [
	{
		title: "Fairsure Travel Website",
		image: project5,
		description:
			"A modern travel booking website for Fairsure Travel, featuring a user-friendly interface for searching flights, selecting trip options, and managing passenger details seamlessly across devices.",
		technologies: ["React", "Tailwind", "Typescript"],
		link: "https://www.fairsuretravel.com.ng/",
	},

	{
		title: "FoodieLand website",
		image: project2,
		description:
			"A website for displaying and learning food recipes, with dynamic webpages.",
		technologies: ["Nextjs", "Tailwind", "Typescript"],
		link: "https://foodieland-uju7.vercel.app/",
	},
	{
		title: "Real Estate Website",
		image: project1,
		description:
			"A fully functional Real estate website with features like product listing, company features, multi-page routing and messaging features.",
		technologies: ["HTML", "Tailwind", "React"],
		link: "https://prop-pal-rho.vercel.app/",
	},

	{
		title: "Portfolio Website",
		image: project3,
		description:
			"A personal portfolio website showcasing projects, skills, and contact information.",
		technologies: ["HTML", "CSS", "React", "Bootstrap"],
		link: "https://portfolio-two-ruddy-64.vercel.app/",
	},

	{
		title: "SoundDzign website",
		image: project4,
		description: "A simple website for learning about music production.",
		technologies: ["HTML", "CSS", "Firebase"],
		link: "https://sounddzign-one.vercel.app/",
	},
];

export const CONTACT = {
	address: "1 Bankers' close 1st Avenue, Calabar, 54022 ",
	phoneNo: "+234 816 550 9263",
	email: "chirokeamadi@gmail.com",
};
