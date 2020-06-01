import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs"
import { AiOutlineLogin } from "react-icons/ai";
import SidebarContext from "../../context/SidebarContext/";
import "./TopBar.css";

function CompanyLogo() {
	return (
		<span className="company-logo">CompanyLogo</span>
	);
}

function InputSearch() {
	return (
		<input className="input-search" type="text" placeholder="e.g. T-Shirt Male"/>
	);
}

function TopBar() {
	const { onOff, toggleSidebar } = React.useContext(SidebarContext);
	return (
		<React.Fragment>
			<div className="top-bar-flexbox">
				<BsLayoutTextSidebar 
					className={`sidebar-icon-${onOff}`} 
					onClick={toggleSidebar}
				/>
				<CompanyLogo />
				<InputSearch />
				<AiOutlineLogin className="login-icon" />
				<FaShoppingCart className="cart-icon" />
			</div>
		</React.Fragment>
	);
}

export default TopBar;