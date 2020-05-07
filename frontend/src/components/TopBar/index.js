import React from "react";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { AiOutlineLogin } from "react-icons/ai";
import "./index.css";

export default function TopBar() {
	return (
		<div className="top-bar-contents">
			<IconContext.Provider value={{ color: "white", size: "40px" }}>
				<BsReverseLayoutTextSidebarReverse />
			</IconContext.Provider>
			<p id="logo">CompanyLogo</p>
			<input id="input-search" type="text" placeholder="e.g. T-Shirt Male"></input>
			<IconContext.Provider value={{ color: "white", size: "40px" }}>
				<AiOutlineLogin />
			</IconContext.Provider>
			<IconContext.Provider value={{ color: "white", size: "40px" }}>
				<FaShoppingCart />
			</IconContext.Provider>
		</div>
	);
}