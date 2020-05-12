/*
understand the css and the sizing
show on the screen which one is active
smooth on the way back
fixate into one when the user is hovering
*/

import React from "react";
import "./index.css";

const slides = [
	{
		imgUrl: "https://preview.ibb.co/j8nRCQ/fashion2.jpg",
		className: "first-img"
	},
	{
		imgUrl: "https://preview.ibb.co/fm4Cmk/fashion3.jpg",
		className: "second-img"
	},
	{
		imgUrl: "https://preview.ibb.co/bMsCK5/fashion5.jpg",
		className: "third-img"
	},
	{
		imgUrl: "https://image.ibb.co/kOhL6k/img1.jpg",
		className: "forth-img"
	},
	{
		imgUrl: "https://image.ibb.co/nNmKz5/img2.jpg",
		className: "fifth-img"
	}
];

export default function App() {
	const [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setCounter(counter + 1)
		}, 2000)
		return () => clearInterval(intervalId);
	}, [counter]);

	return (
		<div className="slidershow middle">
			<div className={slides[counter % slides.length].className}>
				<div className="slides">
					<input type="radio" name="r" id="r1" onClick={() => setCounter(0)}/>
					<input type="radio" name="r" id="r2" onClick={() => setCounter(1)}/>
					<input type="radio" name="r" id="r3" onClick={() => setCounter(2)}/>
					<input type="radio" name="r" id="r4" onClick={() => setCounter(3)}/>
					<input type="radio" name="r" id="r5" onClick={() => setCounter(4)}/>
					<div className="slide s1">
						<img src={slides[0].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[1].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[2].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[3].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[4].imgUrl} alt=""/>
					</div>
					<div className="navigation">
						<label htmlFor="r1" className="bar"></label>
						<label htmlFor="r2" className="bar"></label>
						<label htmlFor="r3" className="bar"></label>
						<label htmlFor="r4" className="bar"></label>
						<label htmlFor="r5" className="bar"></label>
					</div>
				</div>
			</div>
		</div>
	);
}