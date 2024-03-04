
import React from 'react';
import { motion } from 'framer-motion';
const Navbar = ({ page, setPage, setHide} : { page: string, setPage : React.Dispatch<React.SetStateAction<string>>, setHide: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const handleNavigate = (name: string) => {
        
        if (name === page) return
        
        setHide(true)
        setTimeout(() => {
            setPage(name);
        }, 450)
        setTimeout(() => {
            setHide(false);
        }, 500)
    }
    return (

        <div className="fixed z-10 flex p-2 px-16 md:px-32 justify-center md:justify-between w-full gap-4 border-b border-white">
            
            <h3 className="font-bold uppercase hidden md:block"> Jasmine Clarke </h3>
            <div className="flex flex-row gap-4">

                <motion.button 
                whileHover={{ y:-3 }}
                whileTap={{ y:-3 }}
                onClick={() => handleNavigate("Hero")}>
                    Main
                </motion.button>
                <motion.button 
                whileHover={{ y:-3 }}
                whileTap={{ y:-3 }}
                onClick={() => handleNavigate("Gallery")}>
                    Gallery
                </motion.button>
            </div>

        </div>
    );
};

export default Navbar;
