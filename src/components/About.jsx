import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="borer-b border-neutral-900 pb-4">
			<h1 className="my-10 text-center text-4xl">
				About <span className="text-neutral-500">Me</span>
			</h1>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className="w-full"
				>
					<div className="">
						<p className="my-2 py-6 text-center">{ABOUT_TEXT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
