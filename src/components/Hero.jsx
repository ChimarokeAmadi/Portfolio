import { HERO_CONTENT } from "../constants";
// import profilepic from "../assets/ProfilePicture Medium.png";
import { motion } from "framer-motion";

const animateLeft = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const animateRight = (delay) => ({
	hidden: { x: 100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
	return (
		<div className=" border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full">
					<div className="flex flex-col items-center">
						<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 lg:pt-16 pt-5 lg:pt-0">
							<motion.h1
								variants={animateLeft(0)}
								initial="hidden"
								animate="visible"
								className="pb-5 lg:pb-16 text-6xl font-thin tracking-tight  lg:text-8xl"
							>
								Chimaroke
							</motion.h1>
							<motion.h1
								variants={animateRight(1.5)}
								initial="hidden"
								animate="visible"
								className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl"
							>
								Amadi
							</motion.h1>
						</div>

						<motion.span
							variants={animateLeft(0.5)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
						>
							FrontEnd Developer
						</motion.span>
						<motion.p
							variants={animateRight(1)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter"
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>

				{/* <div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center">
						<motion.img
							loading="lazy"
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							src={profilepic}
							alt="Chimaroke Amadi"
							className="h-[300px] rounded-[20px] lg:mt-16 lg:h-[400px]"
						/>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Hero;
