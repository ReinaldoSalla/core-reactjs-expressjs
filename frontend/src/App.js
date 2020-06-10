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

import React, {
	createRef,
	useEffect,
	useState
} from "react";
import throttle from "lodash.throttle";
import "./App.css";

const useVisibility = () => {
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = createRef(null);

	// onScroll is executed only once every 100 ms.
	const onScroll = throttle(() => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		}
		const top = currentElement.current.getBoundingClientRect().top;
		setIsVisible(
			top >= 0 && 
			top <= window.innerHeight
		);
	}, 1);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	});

	return [isVisible, currentElement];
};

const App = () => {
	const [isFirstVisible, firstRef] = useVisibility();
	const [isSecondVisible, secondRef] = useVisibility();
	const firstClassName = isFirstVisible 
		? "first-element-on"
		: "first-element-off";

	useEffect(() => {
		document.title = `${isFirstVisible} - ${isSecondVisible}`
	}, [isFirstVisible, isSecondVisible]);

	return (
		<div className="app">
			<div ref={firstRef} className={firstClassName}>
				Event isFirstVisible
			</div>
			<div ref={secondRef} className="second-element">
				Event isSecondVisible
			</div>
		</div>
	);
};

export default App;