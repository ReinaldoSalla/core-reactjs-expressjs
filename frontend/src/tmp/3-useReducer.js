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
			return { count: state.count + 1 
			};
		case "decrement":
			return { 
				count: state.count - 1
			};
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

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			if (directionState.direction) {
				countDispatch({ type: "increment" });
			} else {
				countDispatch({ type: "decrement" });
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
						//onClick={() => setCount(0)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r2" 
						//onClick={() => setCount(1)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r3" 
						//onClick={() => setCount(2)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r4" 
						//onClick={() => setCount(3)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r5" 
						//onClick={() => setCount(4)}
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
							id={`first-label-on`}
						>
						</label>
						<label 
							htmlFor="r2" 
							className="bar"
							id={`second-label-off`}
						>
						</label>
						<label 
							htmlFor="r3" 
							className="bar"
							id={`third-label-off`}
						>
						</label>
						<label 
							htmlFor="r4" 
							className="bar"
							id={`forth-label-off`}
						>
						</label>
						<label 
							htmlFor="r5" 
							className="bar"
							id={`fifth-label-off`}
						>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}