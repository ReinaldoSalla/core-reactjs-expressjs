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

function directionReducer(state, action) {
	switch(action.type) {
		case "changeDirection": 
			return { direction: !state.direction }
		default:
			return state;
	}
}

function countReducer(state, action) {
	switch(action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1};
		case "move-to-first": 
			return { count: 0 };
		case "move-to-second":
			return { count: 1 };
		case "move-to-third":
			return { count: 2 };
		case "move-to-forth":
			return { count: 3 };
		case "move-to-fifth":
			return { count: 4 }
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

export default function App() {
	const [countState, countDispatch] = React.useReducer(countReducer, { 
		count: 0
	});
	const [directionState, directionDispatch] = React.useReducer(directionReducer, {
		direction: true
	});
	const [firstRound, setFirstRound] = React.useState(true);
	const [stateLabels, dispatchLabels] = React.useReducer(reducerLabels, {
		labels: ["on", "off", "off", "off", "off"]
	});
	const index = countState.count % slides.length;

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			if (directionState.direction) {
				countDispatch({ type: "increment" });
			} else {
				countDispatch({ type: "decrement" });
			}
			switch (index) {
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
					throw new Error("Labels must be [0 ... 4");	
			}
		}, 2000);
		return () => clearInterval(intervalId);
	});

	React.useEffect(() => {
		if (countState.count % 4 === 0) {
			if (!firstRound)
				directionDispatch({ type: "changeDirection" });
			setFirstRound(false);
		}
	}, [countState.count])

	return (
		<div className="slidershow middle">
			<div 
				className = {
					slides[countState.count % slides.length]
					?	slides[countState.count % slides.length].className
					: slides[1].className
				}>
				<div className="slides">
					<input 
						type="radio" 
						name="r" 
						id="r1" 
						onClick={() => countDispatch({ type: "move-to-first" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r2" 
						onClick={() => countDispatch({ type: "move-to-second" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r3" 
						onClick={() => countDispatch({ type: "move-to-third" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r4" 
						onClick={() => countDispatch({ type: "move-to-forth" })}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r5" 
						onClick={() => countDispatch({ type: "move-to-fifth" })}
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
							id={`third-label-off-${stateLabels.labels[2]}`}
						>
						</label>
						<label 
							htmlFor="r4" 
							className="bar"
							id={`forth-label-off-${stateLabels.labels[3]}`}
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