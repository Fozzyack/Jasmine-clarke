import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
	const [page, setPage] = useState("Hero");
	const [hide, setHide] = useState(false);

	return (
		<div className="h-screen text-white bg-black bg">
			<Navbar page={page} setPage={setPage} setHide={setHide} />
			<AnimatePresence>
				{page === "Hero" && !hide ? (
					<Hero />
				) : page === "Gallery" && !hide ? (
					<Gallery />
				) : null}
			</AnimatePresence>
			<div className="fixed bottom-0 left-0 text-xs p-1 rounded-xl bg-black">
				<span>Icons by </span>
				<a
					href="https://icons8.com"
					className="underline cursor-pointer"
				>
					Icons8
				</a>
			</div>
			<div className="fixed bottom-0 right-0 text-xs p-1 rounded-xl bg-black">
				<span>Created by: </span>
				<a
					href="https://frasiersundra.starlightvoyager.dev"
					className="underline cursor-pointer"
				>
			        Frasier Sundra	
				</a>
			</div>
		</div>
	);
}

export default App;
