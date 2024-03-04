
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ATTSS from '../assets/Gallery/ATTSS.jpg';
import Popstars from '../assets/Gallery/Popstars.jpg'
import Senorita from '../assets/Gallery/Senorita.jpg'
import Strut from '../assets/Gallery/Strut.jpg'
import Paradise from '../assets/Gallery/Paradise.jpg'
import Hazel from '../assets/Gallery/Hazel.jpg'
import PG from '../assets/Gallery/PG.jpg'
import Item from './Items';



const GALLERY = [
    {
        name: "Pretty Girl",
        picture: PG,
        listens: 100,
    },
    {
        name: "All The Things She Said",
        picture: ATTSS,
        listens: 23596079,
    },
    {
        name: "Popstars",
        picture: Popstars,
        listens: 14399692,
    },
    {
        name: "Senorita",
        picture: Senorita,
        listens: 100,
    },
    {
        name: "Strut",
        picture: Strut,
        listens: 100,
    },
    {
        name: "Paradise",
        picture: Paradise,
        listens: 100,
    },
    {
        name: "Hazel Eyes",
        picture: Hazel,
        listens: 100,
    },
]
const Gallery = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            className="flex flex-col items-center justify-center pt-16"
        >
            <h3 className="text-sm uppercase font-extrabold">
                Gallery
            </h3>
            <p className="text-xs">
                A collection of some of my singles and albums
            </p>
            <div className="relative grid grid-cols-3 gap-1 mt-4 px-10">
                {GALLERY.map((song, idx) => (
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * idx + 0.2 }}
                    key={idx}>
                        <Item name={song.name} picture={song.picture} listens={song.listens}/>
                    </motion.div>
                ))}


            </div>
        </motion.div>
    );
};

export default Gallery;
