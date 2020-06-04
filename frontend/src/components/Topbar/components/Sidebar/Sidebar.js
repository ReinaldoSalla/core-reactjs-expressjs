import React, { 
	useState, 
	useReducer, 
	useEffect, 
	useRef,
	useContext,
	createContext,
	Fragment
} from "react";
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

const reference = {
	primary: "primary-off",
	electronics: "electronics-off",
	clothes: "clothes-off",
	vehicles: "vehicles-off",
	apartments: "apartments-off",
	houses: "houses-off",
	islands: "islands-off",
	height: null
};

const initialState = {
	...reference,
	primary: "primary-on"
};

const moveToPrimary = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const moveToElectronics = action => ({
	...reference,
	electronics: "electronics-on",
	height: action.payload
});

const moveToClothes = action => ({
	...reference,
	clothes: "clothes-on",
	height: action.payload
});

const moveToVehicles = action => ({
	...reference,
	vehicles: "vehicles-on",
	height: action.payload
});

const moveToApartments = action => ({
	...reference,
	apartments: "apartments-on",
	height: action.payload
});

const moveToHouses = action => ({
	...reference,
	houses: "houses-on",
	height: action.payload
});

const moveToIslands = action => ({
	...reference,
	islands: "islands-on",
	height: action.payload
});

const setInitialHeight = action => ({
	...reference,
	height: action.payload
});

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_INITIAL_HEIGHT":
			return setInitialHeight(action);
		case "MOVE_TO_PRIMARY":
			return moveToPrimary(action);
		case "MOVE_TO_ELECTRONICS":
			return moveToElectronics(action);
		case "MOVE_TO_CLOTHES":
			return moveToClothes(action);
		case "MOVE_TO_VEHICLES":
			return moveToVehicles(action);
		case "MOVE_TO_APARTMENTS":
			return moveToApartments(action);
		case "MOVE_TO_HOUSES":
			return moveToHouses(action);
		case "MOVE_TO_ISLANDS":
			return moveToIslands(action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const DivisibleHr = ({ divisible }) => (
	divisible ? <hr /> : null
);

const SidebarContentItem = ({ 
	leftIcon, 
	text, 
	rightIcon, 
	menu,
	divisible=true 
}) => (
	<Fragment>
		<a 
			href="/#" 
			className="sidebar-content-item"
		>
			<span className="sidebar-content-left-icon">{leftIcon}</span>
			<span className="sidebar-content-text">{text}</span>
			<span className="sidebar-content-right-icon">{rightIcon}</span>
		</a>
		<DivisibleHr divisible={divisible} />
	</Fragment>
);

const SidebarContentContext = createContext();

const SidebarContentProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const moveToPrimary = () => 
		dispatch({ type: "SET_INITIAL_HEIGHT" });

	const moveToElectronics = () => 
		dispatch({ type: "MOVE_TO_ELECTRONICS" });

	const moveToClothes = () =>
		dispatch({ type: "MOVE_TO_CLOTHES" });

	const moveToVehicles = () =>
		dispatch({ type: "MOVE_TO_VEHICLES" });

	const moveToApartments = () => 
		dispatch({ type: "MOVE_TO_APARMENTS" });

	const moveToHouses = () => 
		dispatch({ type: "MOVE_TO_HOUSES" });

	const moveToIslands = () => 
		dispatch({ type: "MOVE_TO_ISLANDS" });

	const setInitialHeight = offsetHeight =>
		dispatch({ type: "SET_INITIAL_HEIGHT", payload: offsetHeight });

	const value = {
		state,
		height: state.height,
		moveToPrimary,
		moveToElectronics,
		moveToClothes,
		moveToVehicles,
		moveToApartments,
		moveToHouses,
		moveToIslands,
		setInitialHeight
	};

	return (
		<SidebarContentContext.Provider value={value}>
			{children}
		</SidebarContentContext.Provider>
	);
};


const SidebarContentPrimary = () => {
	const {
		state,
		moveToPrimary,
		moveToElectronics,
		moveToClothes,
		moveToVehicles,
		moveToAparments,
		moveToHouses,
		moveToIslands,
	} = useContext(SidebarContentContext);

	return (
		<div className={state.primary}>
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
};

const SidebarContent = ({ contentClassName }) => {
	const { height, setInitialHeight } = useContext(SidebarContentContext);
	const sidebarContentRef = useRef(null);

	useEffect(() => {
		setInitialHeight(sidebarContentRef.current?.firstChild.offsetHeight);
	}, []);

	return (
		<div 
			ref={sidebarContentRef}
			className={contentClassName}
			style={{ height: height }}
		>
			<SidebarContentPrimary />
		</div>
	);
};

const Sidebar = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);
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
			<SidebarContentProvider>
				<SidebarContent contentClassName={contentClassName}/>
			</SidebarContentProvider>
		</div>
	);
};

export default Sidebar;