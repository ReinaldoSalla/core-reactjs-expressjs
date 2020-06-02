import React from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
//import Content from "./components/Content";
import "./App.css"

const Divs = () => {
	const contents = Array(100).fill(0).map((_, index) => 
		<div key={index}> 
			content #{index + 1}
		</div>
	);
	return (
		<div>
			{contents}
		</div>
	);
};

const Br = () => (
	<React.Fragment>
		<br /> <br /> <br /> <br /> <br />
	</React.Fragment>
);

const App = () => {
	return (
		<React.Fragment>
			<Topbar /> 
			<Br />
			<Courosel />
			<Divs />
		</React.Fragment>
	);
};

export default App;