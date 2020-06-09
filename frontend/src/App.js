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
			{/*<Topbar />
			<Courosel />
			<Trending />*/}
			<Categories />
		</Fragment>
	);
};

export default App;

