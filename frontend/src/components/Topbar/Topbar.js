import React from "react";
import Sidebar from "./components/Sidebar";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import "./Topbar.css";

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

const Login = () => (
	<AiOutlineLogin className="login-icon" />
);

const Cart = () => (
	<FaShoppingCart className="cart-icon" />
);

const TopBar = () => (
	<div className="topbar">
		<Sidebar />
		<CompanyLogo />
		<InputSearch />
		<Login />
		<Cart />
	</div>
);

export default TopBar;