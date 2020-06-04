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
	islands: "islands-off",
	height: null
};

const menuPrimary = {
	...baseline,
	primary: "primary-on"
};

const menuElectronics = {
	...baseline,
	electronics: "electronics-on"
};

const menuClothes = {
	...baseline,
	vehicles: "vehicles-on"
};

const menuApartments = {
	...baseline,
	apartments: "apartments-on"
};

const menuHouses = {
	...baseline,
	houses: "houses"
};

const menuIslands = {
	...baseline,
	islands: "islands-on"
};

const changeHeight = action => ({
	...baseline,
	height: action.payload
});

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_HEIGHT":
			return changeHeight(action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const DivisibleHr = ({ divisible }) => (
	divisible ? <hr /> : null
);

const SidebarContentItem = ({ leftIcon, text, rightIcon, divisible=true }) => (
	<React.Fragment>
		<a href="/#" className="sidebar-content-item">
			<span className="sidebar-content-left-icon">{leftIcon}</span>
			<span className="sidebar-content-text">{text}</span>
			<span className="sidebar-content-right-icon">{rightIcon}</span>
		</a>
		<DivisibleHr divisible={divisible} />
	</React.Fragment>
);

const SidebarPrimary = () => (
	<div>
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
			divisible={false}
		/>
	</div>
);

const SidebarContent = ({ contentClassName }) => {
	const [state, dispatch] = React.useReducer(reducer, menuPrimary);
	const sidebarContentRef = React.useRef(null);

	React.useEffect(() => {
		dispatch({
			type: "CHANGE_HEIGHT",
			payload: sidebarContentRef.current?.firstChild.offsetHeight
		});
	}, []);

	return (
		<div 
			ref={sidebarContentRef}
			className={contentClassName}
			style={{ height: state.height }}
		>
			<SidebarPrimary />
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