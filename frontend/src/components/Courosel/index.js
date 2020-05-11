import React from "react";
import "./index.css";

const imgs = [
	"first-img",
	"second-img",
	"third-img"
];	

export default function Courosel() {
	const [time, setTime] = React.useState(0);
	const index = time % imgs.length;

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(time + 1);
		}, 2000);
		return () => clearInterval(intervalId);
	}, [time]);

	return (
		<div className={imgs[index]}/>
	);
}