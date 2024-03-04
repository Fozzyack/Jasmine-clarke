
import React from 'react';
import { motion } from 'framer-motion'

const LINKS = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/jasmine__clarke",
        icon: "https://img.icons8.com/fluency/48/instagram-new.png"
    },
    {
        name: "Threads",
        href: "https://www.threads.net/@jasmine__clarke",
        icon: "https://img.icons8.com/pulsar-line/48/threads.png"
    },
    {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCar9tEltAWdUP2lATQ5HJOA",
        icon: "https://img.icons8.com/color/48/youtube-play.png"
    },
    {
        name: "Spotify",
        href: "https://open.spotify.com/artist/35OHoy0DGJRqpfmYvByDBc",
        icon: "https://img.icons8.com/color/48/spotify--v1.png"
    },
    {
        name: "Apple Music",
        href: "https://music.apple.com/au/artist/jasmine-clarke/1474753213",
        icon: "https://img.icons8.com/color/48/apple-music.png"
    },
    {
        name: "Twitter",
        href: "https://twitter.com/jasmineeclarke",
        icon: "https://img.icons8.com/color/48/twitterx--v1.png"
    },
]
const Links = () => {
    return (
        <div className="flex flex-wrap items-center justify-center relative gap-1 md:px-1 md:py-1 bg-black z-10 rounded-3xl">
            {
                LINKS.map((link, idx) => (
                    <motion.a 
                    whileHover={{ y: -5 }}
                    whileTap={{ y: -5 }}
                    href={link.href}
                    className="p-1 relative group/icon"
                    >

				<div className="absolute inset-0 rounded-3xl z-[2] opacity-0 group-hover/icon:opacity-100 transition ease-in-out duration-500 blur-lg p-2 bg-[linear-gradient(to_right,#0282f2,#ed4ff0)]" />
                        <div className="relative z-20 p-2 w-[42px] h-[42px] bg-slate-700 rounded-3xl bg-opacity-60">
                            <img src={link.icon} alt={link.href} />
                        </div>
                    </motion.a>
            ))}
        </div>
    );
};

export default Links;
