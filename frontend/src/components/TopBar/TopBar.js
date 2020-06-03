import React from "react";
import { 
	FaShoppingCart,
	FaCar,
	FaBuilding
} from "react-icons/fa";
import { 
	AiOutlineLogin, 
	AiOutlineArrowRight 
} from "react-icons/ai";
import { 
	GiSmartphone,
	GiLoincloth,
	GiHouse,
	GiIsland
} from "react-icons/gi";
import { BsLayoutTextSidebar } from "react-icons/bs";
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

const SidebarContentItem = ({ leftIcon, text, rightIcon }) => (
	<React.Fragment>
		<a className="sidebar-content-item">
			<span className="sidebar-content-left-icon">{leftIcon}</span>
			<span className="sidebar-content-text">{text}</span>
			<span className="sidebar-content-right-icon">{rightIcon}</span>
		</a>
		<hr />
	</React.Fragment>
);

const SidebarContent = ({ contentClassName }) => (
	<div className={contentClassName}>
		<SidebarContentItem
			leftIcon={<GiSmartphone />}
			text="Eletronics"
			rightIcon={<AiOutlineArrowRight />}
		/> 
		<SidebarContentItem
			leftIcon={<GiLoincloth />}
			text="Clothes"
			rightIcon={<AiOutlineArrowRight />}
		/>
		<SidebarContentItem
			leftIcon={<FaCar />}
			text="Vehicles"
			rightIcon={<AiOutlineArrowRight />}
		/>
		<SidebarContentItem
			leftIcon={<FaBuilding />}
			text="Apartments"
			rightIcon={<AiOutlineArrowRight />}
		/>
		<SidebarContentItem
			leftIcon={<GiHouse />}
			text="Houses"
			rightIcon={<AiOutlineArrowRight />}
		/>
		<SidebarContentItem
			leftIcon={<GiIsland />}
			text="Islands"
			rightIcon={<AiOutlineArrowRight />}
		/>
	</div>
);

const Sidebar = () => {
	const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
	const iconClassName = isSidebarVisible 
		? "sidebar-icon-on"
		: "sidebar-icon-off";
	const contentClassName = isSidebarVisible
		? "sidebar-content-on" 
		: "sidebar-content-off";

	const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

	return (
		<div className="sidebar-icon-content">
			<BsLayoutTextSidebar
				className={iconClassName}
				onClick={toggleSidebar}
			/>
			<SidebarContent contentClassName={contentClassName}/>
		</div>
	);
};

const Login = () => (
	<AiOutlineLogin className="login-icon" />
);

const Cart = () => (
	<FaShoppingCart className="cart-icon" />
);

const TopBar = () => (
	<div className="topbar-flexbox">
		<Sidebar />
		<CompanyLogo />
		<InputSearch />
		<Login />
		<Cart />
	</div>
);

export default TopBar;