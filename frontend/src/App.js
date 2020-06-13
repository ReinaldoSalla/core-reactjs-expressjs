/*
import React, { Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
//import Content from "./components/Content";
import "./App.css"

const App = () => {
	return (
		<Fragment>
			<Topbar />
			<Courosel />
			<Trending />
			<Categories />
		</Fragment>
	);
};

export default App;
*/

//scroll up-down https://stackoverflow.com/questions/31223341/detecting-scroll-direction

import React, {
	useEffect,
	useState,
	Fragment
} from "react";
import "./App.css";

const addZeros = number => {
	if (number < 10) return `00${number}`
	else if (number < 100) return `0${number}`;
	else return number;
};

const Content = ({ numContents }) => {
	const contents = new Array(numContents).fill(0).map((_, index) => 
		<div key={index}>
			Content #{addZeros(index + 1)} -
		</div>
	);
	return (
		<div className="content">
			{contents}
		</div>
	)
};

const debounce = (fn, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(...args)
		}, delay)
	};
};

const App = () => {
	const [countRaw, setCountRaw] = useState(0);
	const [countDebounce, setCountDebounce] = useState(0);

	const onScrollRaw = () => {
		setCountRaw(countRaw + 1);
	};

	const onScrollDebounce = debounce(() => {
		setCountDebounce(countDebounce + 1);
	}, 1000);

	useEffect(() => {
		window.addEventListener("scroll", onScrollRaw);
		return () => window.removeEventListener("scroll", onScrollRaw);
	});

	useEffect(() => {
		window.addEventListener("scroll", onScrollDebounce);
		return () => window.removeEventListener("scroll", onScrollDebounce);
	});

	return (
		<Fragment>
			<div className="count">
				<h1> onScrollRaw </h1>
				<h2> raw: {countRaw} </h2>
				<h2> debounce: {countDebounce} </h2>
			</div>
			<Content numContents={1000}/>
		</Fragment>
	);
}

export default App;