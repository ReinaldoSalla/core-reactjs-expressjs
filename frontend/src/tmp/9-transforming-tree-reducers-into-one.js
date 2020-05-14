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

function reducer(state, action) {
	switch (action.type) {
		case "setDirectionToRight":
			return { ...state, direction: "right" };
		case "setDirectionToLeft":
			return { ...state, direction: "left" };
		case "moveToFirstIndex":
			return { ...state, index: 0 };
		case "moveToSecondIndex":
			return { ...state, index: 1 };
		case "moveToThirdIndex":
			return { ...state, index: 2 };
		case "moveToForthIndex":
			return { ...state, index: 3 };
		case "moveToFifthIndex":
			return { ...state, index: 4 };
		case "incrementIndex":
			return { ...state, index: state.index + 1};
		case "decrementIndex":
			return { ...state, index: state.index - 1};
		case "highlightFirstLabel":
			return { ...state, labels: ["on", "off", "off", "off", "off" ]};
		case "highlightSecondLabel":
			return { ...state, labels: ["off", "on", "off", "off", "off" ]};
		case "highlight-third-label":
			return { ...state, labels: ["off", "off", "on", "off", "off" ]};
		case "highlight-forth-label":
			return { ...state, labels: ["off", "off", "off", "on", "off" ]};
		case "highlight-fifth-label":
			return { ...state, labels: ["off", "off", "off", "off", "on" ]};
		default:
			throw new TypeError(`Action '${action.type} is undefined'`);
	}
}

export default function Courosel() {
	const [state, dispatch] = React.useReducer(reducer, {
		index: 0,
		directoin: "right",
		labels: ["on", "off", "off", "off", "off"]
	});

	console.log(`state.index = ${state.index}`);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			switch (state.direction) {
				case "right":
					dispatch({ type: "incrementIndex" });
					break;
				case "left":
					dispatch({ type: "decrementIndex" });
					break;
				default:
					throw new TypeError("Direction error");
			}
		}, 2000);
		return () => clearInterval(intervalId);
	});

	React.useEffect(() => {
		switch (state.index) {
			case 0:
				dispatch({ type: "setDirectionToRight" });
				break;
			case 1: 
				break;
			case 2: 
				break;
			case 3:
				break;
			case 4:
				dispatch({ type: "setDirectionToLeft" });
				break
			default:
				throw new TypeError("Indexed must be [0 ... 4]");
		}
	}, [state.index]);

	React.useEffect(() => {
		switch (state.index) {
			case 0:
				dispatch({ type: "highlight-first" });
				break;
			case 1:
				dispatch({ type: "highlight-second" });
				break;
			case 2:
				dispatch({ type: "highlight-third" });
				break;
			case 3:
				dispatch({ type: "highlight-forth" });
				break;
			case 4:
				dispatch({ type: "highlight-fifth" });
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
