import React from "react";
import { motion } from "framer-motion";

const LINKS = [
    {
        name: "Main",
        screen: "Hero"
    },
    {
        name: "Gallery",
        screen: "Gallery"
    }
]
const Navbar = ({
	page,
	setPage,
	setHide,
}: {
	page: string;
	setPage: React.Dispatch<React.SetStateAction<string>>;
	setHide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleNavigate = (name: string) => {
		if (name === page) return;

		setHide(true);
		setTimeout(() => {
			setPage(name);
		}, 450);
		setTimeout(() => {
			setHide(false);
		}, 500);
	};
	return (
		<div className="fixed z-20 w-full pb-1">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]"/>
			<div className="relative bg-black z-10 flex p-2 px-16 md:px-32 justify-center md:justify-between items-center w-full gap-4">
				<h3 className="font-bold uppercase hidden md:block">
					{" "}
					Jasmine Clarke{" "}
				</h3>
				<div className="relative z-50 flex flex-row gap-4">
                    {LINKS.map((link, idx) => (
					<motion.button

						whileHover={{ y: -3 }}
						whileTap={{ y: -3 }}
						onClick={() => handleNavigate(link.screen)}
                        key={idx}
                        
					>
                        <div className={`py-2 px-3 rounded-full transition-all ease-in-out duration-500 ${page === link.screen ? 'bg-[#0282f2]': 'bg-[#ed4ff0]'}`}>
                            {link.name}
                        </div>
					</motion.button>
                    
                   ))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
