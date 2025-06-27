import project1 from "../assets/projects/project1 Small.png";
import project2 from "../assets/projects/foodieland Small.png";
import project4 from "../assets/projects/sounddzign Small.png";
import project3 from "../assets/projects/portfolio Small.png";
import project5 from "../assets/projects/fairsure.jpeg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With over 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly  applications. With 2 years of experience, I have worked with a variety of technologies, including React, Next.js, React native etc. My journey in frontend development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
	{
		date: "March, 2024 - May, 2024",
		role: "Intern",
		company: "Oasis Infobyte",
		description: `Implemented CSS and JavaScript technologies such as React and Bootstrap to create delightful user experience on various web and mobile apps`,
		technologies: ["Javascript", "React.js", "React-Native"],
	},
	{
		date: "February, 2023 - February, 2024",
		role: "Intern",
		company: "MyAza",
		description: `Implemented frontend development frameworks like react as well as frontend development principles like responsive design to provide enticing and user-friendly user interfaces and helped with code documentation, unit testing and APIs`,
		technologies: ["HTML", "CSS", "ReactJs", "React Native"],
	},
	{
		date: "February, 2024 – Present",
		role: "Front-End Developer",
		company: "Devwyre",
		description: `Architected and developed scalable, high-performance React.js applications, ensuring optimal responsiveness and seamless user experience across devices. Designed and implemented modular, reusable UI components to accelerate development and maintain a scalable frontend architecture. Established best practices for code maintainability and documentation, ensuring robust and bug-free application releases. Implemented unit testing and integrated APIs effectively.`,
		technologies: ["React.js", "JavaScript", "HTML", "CSS"],
	},
	{
		date: "March, 2021 – February, 2024",
		role: "Front-End Developer",
		company: "MyAza",
		description: `Developed and maintained enterprise-level React.js applications with a strong focus on performance, scalability, and availability. Implemented micro-frontend architecture for integrating independently deployed UI components. Collaborated with UI/UX designers to create pixel-perfect, accessible, and engaging interfaces. Integrated RESTful APIs and Microservices for seamless frontend-backend communication.`,
		technologies: ["React.js", "Micro-Frontends", "REST APIs", "JavaScript"],
	},
	{
		date: "Contract",
		role: "Front-End Developer",
		company: "PropPal Limited",
		description: `Developed and optimized the company’s platform using Next.js, leading to significant SEO and web performance improvements. Used Context API for state management, improving efficiency and maintainability. Built modular, component-driven architecture for better scalability. Ensured cross-device responsiveness and collaborated with backend engineers to build a reliable RESTful API architecture.`,
		technologies: ["Next.js", "React.js", "Context API", "REST APIs"],
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
