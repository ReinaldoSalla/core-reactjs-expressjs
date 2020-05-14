/*
refactor
css and sizing
fixate when user hover it
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

function reducerDirection(state, action) {
	switch (action.type) {
		case "setToRight":
			return { direction: "right" };
		case "setToLeft":
			return { direction: "left" };
		default:
			return state;
	}
}

function reducerIndex(state, action) {
	switch (action.type) {
		case "move-to-first": 
			return { index: 0 };
		case "move-to-second":
			return { index: 1 };
		case "move-to-third":
			return { index: 2 };
		case "move-to-forth":
			return { index: 3 };
		case "move-to-fifth":
			return { index: 4 }
		case "increment":
			return { index: state.index + 1 };
		case "decrement":
			return { index: state.index - 1};
		default:
			return state;
	}
}

function reducerLabels(state, action) {
	switch (action.type) {
		case "highlight-first":
			return { labels: ["on", "off", "off", "off", "off"] };
		case "highlight-second":
			return { labels: ["off", "on", "off", "off", "off" ]};
		case "highlight-third":
			return { labels: ["off", "off", "on", "off", "off" ]};
		case "highlight-forth":
			return { labels: ["off", "off", "off", "on", "off" ]};
		case "highlight-fifth":
			return { labels: ["off", "off", "off", "off", "on" ]};
		default:
			return state; 
	}
}

export default function Courosel() {
	const [stateIndex, dispatchIndex] = React.useReducer(reducerIndex, { 
		index: 0
	});
	const [stateDirection, dispatchDirection] = React.useReducer(reducerDirection, {
		direction: true
	});
	const [stateLabels, dispatchLabels] = React.useReducer(reducerLabels, {
		labels: ["on", "off", "off", "off", "off"]
	});

	console.log(`stateIndex.index = ${stateIndex.index}`);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			switch (stateDirection.direction) {
				case "right":
					dispatchIndex({ type: "increment" });
					break;
				case "left":
					dispatchIndex({ type: "decrement" });
					break;
				default:
					throw new TypeError("Direction error");
			}
		}, 2000);
		return () => clearInterval(intervalId);
	});

	React.useEffect(() => {
		switch (stateIndex.index) {
			case 0:
				dispatchDirection({ type: "setToRight" });
				break;
			case 1: 
				break;
			case 2: 
				break;
			case 3:
				break;
			case 4:
				dispatchDirection({ type: "setToLeft" });
				break
			default:
				throw new TypeError("Indexed must be [0 ... 4]");
		}
	}, [stateIndex.index]);

	React.useEffect(() => {
		switch (stateIndex.index) {
			case 0:
				dispatchLabels({ type: "highlight-first" });
				break;
			case 1:
				dispatchLabels({ type: "highlight-second" });
				break;
			case 2:
				dispatchLabels({ type: "highlight-third" });
				break;
			case 3:
				dispatchLabels({ type: "highlight-forth" });
				break;
			case 4:
				dispatchLabels({ type: "highlight-fifth" });
				break;
			default:
				throw new TypeError("Indexes must be [0 ... 4]");
		}
	}, [stateIndex.index]);

	return (
		<div className="slidershow middle">
			<div 
				className = {slides[stateIndex.index].className}>
				<div className="slides">
					<input 
						type="radio" 
						name="r" 
						id="r1" 
						onClick={() => dispatchIndex({ type: "move-to-first" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r2" 
						onClick={() => dispatchIndex({ type: "move-to-second" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r3" 
						onClick={() => dispatchIndex({ type: "move-to-third" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r4" 
						onClick={() => dispatchIndex({ type: "move-to-forth" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r5" 
						onClick={() => dispatchIndex({ type: "move-to-fifth" })}
					/>
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
						<label 
							htmlFor="r1" 
							className="bar"
							id={`first-label-${stateLabels.labels[0]}`}
						>
						</label>
						<label 
							htmlFor="r2" 
							className="bar"
							id={`second-label-${stateLabels.labels[1]}`}
						>
						</label>
						<label 
							htmlFor="r3" 
							className="bar"
							id={`third-label-${stateLabels.labels[2]}`}
						>
						</label>
						<label 
							htmlFor="r4" 
							className="bar"
							id={`forth-label-${stateLabels.labels[3]}`}
						>
						</label>
						<label 
							htmlFor="r5" 
							className="bar"
							id={`fifth-label-${stateLabels.labels[4]}`}
						>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}