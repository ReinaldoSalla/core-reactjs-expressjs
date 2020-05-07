import React from "react";
import "./index.css";

// SideBar Logo SearchBar Cart

/*
poss
font awesome
react materialize
material ui
bootstrap
*/

function Ps() {
	return Array.from({ length: 5 }, (value, key) => 
		<p>button{key+1}</p>
	)
}

export default function TopBar() {
	return (
		<div className="top-bar-contents">
			<Ps />
		</div>
	);
}