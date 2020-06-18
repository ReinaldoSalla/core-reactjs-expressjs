/*
import React, { Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
//import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
	return (
		<Fragment>
			<Topbar />
			<Courosel />
			<Trending />
			<Categories />
      <Footer />
		</Fragment>
	);
};

export default App;
*/

// useVisibilityTimeOnceDown

import React from "react";
import "./App.css";

/*
const data = new Array(12).fill(0).map((_, index) => 
  `Content ${index}`
);
*/

const data = new Array(12).fill(0).map((_, index) => ({
  text: `Content ${index + 1}`
}));

const Item = ({ text }) => (
  <div className="item">
    {text}
  </div>
);

const Items = () => {
  const listItems = data.map((item, index) => 
    <Item key={index} text={item.text}/>
  );
  return (
    <div className="items">
      {listItems}
    </div>
  );
};

const App = () => {
  return (
    <Items />
  );
};

export default App;