import React from "react";
import HeroImage from "../assets/HeroImageNBGRes.png";
import Embeds from "./Embeds";
import Links from "./Links";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 500 }}
			className="relative h-screen flex flex-col items-center justify-between md:justify-end pt-10 md:pb-8 px-4 overflow-hidden backgroundHero"
		>
			<div className="hidden absolute inset-0 md:flex flex-col z-0 mt-9">
				<div className="w-full relative flex justify-center m-4 group">
					<div className=" relative p-2 rounded-full ">
					<div className=" absolute inset-0 rounded-full bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]"/>
					<div className=" absolute inset-0 rounded-full blur-xl bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]"/>
                        <div className="w-full relative z-10 bg-black rounded-full px-4">
                            <span className="absolute md:text-[6rem] uppercase text-transparent blur bg-clip-text bg-white text-center ">
                                Good Vibes Only
                            </span>
                            <span className="md:text-[6rem] uppercase text-white text-center ">
                                Good Vibes Only
                            </span>
                        </div>
					</div>
				</div>
			</div>
			<div className="relative transform md:rotate-12 mb-2 z-20 mt-2 flex justify-center">
				<span className="absolute text-[2rem] text-center md:text-[6rem] blur-xl uppercase font-extrabold hero-name-1 z-10 ">
					Jasmine Clarke
				</span>
				<span className="text-[2rem] text-center md:text-[6rem] uppercase font-extrabold hero-name-1 z-10 ">
					Jasmine Clarke
				</span>
			</div>
			<div className="relative group p-[4px] group z-20">
				<div className="absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 transition ease-in-out duration-500 blur-xl p-4 bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]" />
				<div className="absolute inset-0 rounded-3xl z-[1] p-1 bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]" />
				<Links />
			</div>
			<div className="mt-4 flex flex-col md:flex-row gap-2 z-20">
				<Embeds />
			</div>
			<img
				src={HeroImage}
				alt="Jasmine and Seraphine"
				className="block md:absolute md:z-10 md:top-0"
			/>
		</motion.div>
	);
};

export default Hero;
