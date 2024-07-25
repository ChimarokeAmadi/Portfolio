import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiSass } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Technologies = () => {
	return (
		<div className='border-b border-neutral-800 pb-24'>
			<h1 className='my-20 text-center text-4xl'>Technologies</h1>
			<div className='flex flex-wrap items-center justify-center gap-4'>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<RiReactjsLine className='text-7xl text-sky-700' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiTypescript className='text-7xl text-white' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<RiTailwindCssFill className='text-7xl text-cyan-400' />
				</div>

				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<DiSass className='text-7xl text-red-600' />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
