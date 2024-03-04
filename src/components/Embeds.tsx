import React, { Fragment } from "react";

const Embeds = () => {
	return (
		<Fragment>
			<div className="p-1 rounded-xl bg-[linear-gradient(to_right,#0282f2,#ed4ff0)] shadow-xl">
				<iframe
					src="https://open.spotify.com/embed/artist/35OHoy0DGJRqpfmYvByDBc?utm_source=generator&theme=0"
					allowFullScreen={true}
					width="100%"
					height="152px"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
					title={"Spotify"}
					style={{ borderRadius: "12px" }}
					className="rounded-3xl"
				></iframe>
			</div>
			<div className="flex items-center justify-center rounded-3xl shadow-xl">
				<iframe
					src="https://www.youtube.com/embed/kENlyB7JXlI?si=Am33-puDMT-zg-po"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen={true}
					className="rounded-3xl"
				></iframe>
			</div>
		</Fragment>
	);
};

export default Embeds;
