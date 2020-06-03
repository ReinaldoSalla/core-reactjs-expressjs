import React from "react";
import { 
	FaCar,
	FaBuilding
} from "react-icons/fa";
import { 
	GiSmartphone,
	GiLoincloth,
	GiHouse,
	GiIsland
} from "react-icons/gi";
import {  AiOutlineArrowRight } from "react-icons/ai";
import { BsLayoutTextSidebar } from "react-icons/bs";
import "./Sidebar.css";

const baseline = {
	primary: "primary-off",
	electronics: "electronics-off",
	clothes: "clothes-off",
	vehicles: "vehicles-off",
	apartments: "apartments-off",
	houses: "houses-off",
	islands: "islands-off"
};

const init = () => ({
	...baseline,
	primary: "primary-off"
});

const reducer = (state, action) => {

}

const SidebarContentItem = ({ leftIcon, text, rightIcon }) => (
	<React.Fragment>
		<a href="/#" className="sidebar-content-item">
			<span className="sidebar-content-left-icon">{leftIcon}</span>
			<span className="sidebar-content-text">{text}</span>
			<span className="sidebar-content-right-icon">{rightIcon}</span>
		</a>
		<hr />
	</React.Fragment>
);

const SidebarContent = ({ contentClassName }) => {
	

	return (
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
};

const Sidebar = () => {
	const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
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

export default Sidebar;