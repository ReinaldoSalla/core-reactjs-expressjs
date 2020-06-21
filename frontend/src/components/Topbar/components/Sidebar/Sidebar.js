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
	FaBuilding,
  FaLaptop
} from "react-icons/fa";
import { 
	GiSmartphone,
	GiLoincloth,
	GiHouse,
	GiIsland,
  GiGamepad
} from "react-icons/gi";
import {  
	AiOutlineArrowRight,
	AiOutlineArrowLeft 
} from "react-icons/ai";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import "./Sidebar.css";

/*
smartphone = iphone, galaxy, pixel
notebooks - macbook, dell, alienware, acer, lenovo
televisions - sony, samsung, lg, panasonic
video-games: xbox, playstation, valve vr
man's - t-shirts, pants, shoes, underware, perfumes
woman's t-shirts, dresses, pants, shoes, underware, perfumes
browse all
*/

const LeftIcon = ({ leftIcon }) => (
	<span className="sidebar-content-left-icon">
		{leftIcon}
	</span>
);

const MiddleText = ({ text }) => (
	<span className="sidebar-content-text">
		{text}
	</span>
);

const OptionalRightIcon = ({ rightIcon }) => (
	rightIcon 
		? <span className="sidebar-content-right-icon">{rightIcon}</span>  
		: null
);

const DivisibleHr = ({ divisible }) => (
	divisible ? <hr /> : null
);

const SidebarContentItem = ({ 
	leftIcon, 
	text, 
	rightIcon, 
	moveToMenu,
	reduce=false,
	divisible=true 
}) => {
	const className = reduce
		? "sidebar-content-item-reduced"
		: "sidebar-content-item"

	return (
		<Fragment>
			<a 
				href="/#" 
				className={className}
				onClick={moveToMenu}
			>
				<LeftIcon leftIcon={leftIcon}/>
				<MiddleText text={text} />
				<OptionalRightIcon rightIcon={rightIcon}/>
			</a>
			<DivisibleHr divisible={divisible} />
		</Fragment>
	);
};

const reference = {
	primary: "primary-off",
	smartphones: "smartphones-off",
	notebooks: "notebooks-off",
	televisions: "televisions-off",
	videogames: "videogames-off",
	mens: "mens-off",
	womans: "womans-off",
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

const moveToSmartphones = action => ({
	...reference,
	smartphones: "smartphones-on",
	height: action.payload
});

const moveToNotebooks = action => ({
	...reference,
	notebooks: "notebooks-on",
	height: action.payload
});

const moveToTelevisions = action => ({
	...reference,
	televisions: "televisions-on",
	height: action.payload
});

const moveToVideogames = action => ({
	...reference,
	videogames: "videogames-on",
	height: action.payload
});

const moveToMens = action => ({
	...reference,
	mens: "mens-on",
	height: action.payload
});

const moveToWomans = action => ({
	...reference,
	womans: "womans-on",
	height: action.payload
});

const setInitialHeight = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_INITIAL_HEIGHT":
			return setInitialHeight(action);
		case "MOVE_TO_PRIMARY":
			return moveToPrimary(action);
		case "MOVE_TO_SMARTPHONES":
			return moveToSmartphones(action);
		case "MOVE_TO_NOTEBOOKS":
			return moveToNotebooks(action);
		case "MOVE_TO_TELEVISIONS":
			return moveToTelevisions(action);
		case "MOVE_TO_VIDEOGAMES":
			return moveToVideogames(action);
		case "MOVE_TO_MENS":
			return moveToMens(action);
		case "MOVE_TO_WOMANS":
			return moveToWomans(action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const SidebarContentContext = createContext();

const SidebarContentProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const sidebarContentRef = useRef(null);
	const primaryRef = useRef(null);
	const smartphonesRef = useRef(null);
	const notebooksRef = useRef(null);
	const televisionsRef = useRef(null);
	const videogamesRef = useRef(null);
	const mensRef = useRef(null);
	const womansRef = useRef(null);

	const moveToPrimary = () => 
		dispatch({ 
			type: "MOVE_TO_PRIMARY",
			payload: primaryRef.current.offsetHeight 
		});

	const moveToSmartphones = () => 
		dispatch({ 
			type: "MOVE_TO_SMARTPHONES",
			payload: smartphonesRef.current.offsetHeight
		});

	const moveToNotebooks = () =>
		dispatch({ 
			type: "MOVE_TO_NOTEBOOKS",
			payload: notebooksRef.current.offsetHeight 
		});

	const moveToTelevisions = () =>
		dispatch({ 
			type: "MOVE_TO_TELEVISIONS",
			payload: televisionsRef.current.offsetHeight
		});

	const moveToVideogames = () => 
		dispatch({ 
			type: "MOVE_TO_VIDEOGAMES",
			payload: videogamesRef.current.offsetHeight 
		});

	const moveToMens = () => 
		dispatch({ 
			type: "MOVE_TO_MENS",
			payload: mensRef.current.offsetHeight 
		});

	const moveToWomans = () => 
		dispatch({ 
			type: "MOVE_TO_WOMANS",
			payload: womansRef.current.offsetHeight 
		});

	const setInitialHeight = () =>
		dispatch({ 
			type: "SET_INITIAL_HEIGHT",
			payload: sidebarContentRef.current?.firstChild.offsetHeight 
		});

	useEffect(() => {
		setInitialHeight();
	}, []);

	const value = {
		primaryClassName: state.primary,
		smartphonesClassName: state.smartphones,
		notebooksClassName: state.notebooks,
		televisionsClassName: state.televisions,
		videogamesClassName: state.videogames,
		mensClassName: state.mens,
		womansClassName: state.womans,
		height: state.height,
		primaryRef,
		smartphonesRef,
		notebooksRef,
		televisionsRef,
		videogamesRef,
		mensRef,
		womansRef,
		moveToPrimary,
		moveToSmartphones,
		moveToNotebooks,
		moveToTelevisions,
		moveToVideogames,
		moveToMens,
		moveToWomans,
		sidebarContentRef
	};

	return (
		<SidebarContentContext.Provider value={value}>
			{children}
		</SidebarContentContext.Provider>
	);
};

const SidebarContentPrimary = () => {
	const {
		primaryClassName,
		primaryRef,
		moveToSmartphones,
		moveToNotebooks,
		moveToTelevisions,
		moveToVideogames,
		moveToMens,
		moveToWomans,
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={primaryClassName}
			ref={primaryRef}
		>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Smartphones"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToSmartphones}
			/> 
			<SidebarContentItem
				leftIcon={<FaLaptop />}
				text="Notebooks"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToNotebooks}
			/>
			<SidebarContentItem
				leftIcon={<FiMonitor />}
				text="Televisions"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToTelevisions}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Videogames"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToVideogames}
			/>
			<SidebarContentItem
				leftIcon={<GiHouse />}
				text="Men's"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToMens}
			/>
			<SidebarContentItem
				leftIcon={<GiIsland />}
				text="Woman's"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToWomans}
				divisible={false}
			/>
		</div>
	);
};

const SidebarContentSmartphones = () => {
	const { 
		smartphonesClassName, 
		smartphonesRef,
		moveToPrimary 
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={smartphonesClassName}
			ref={smartphonesRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
				text="Iphone"
			/> 
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
				text="Galaxy"
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
				text="Pixel"
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
				text="Browse All"
			/>
		</div>
	);
};

const SidebarContentNotebooks = () => {
	const {
		notebooksClassName,
		notebooksRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={notebooksClassName}
			ref={notebooksRef}
		>
			<SidebarContentItem
        leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
				reduce={true}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Macbook"
				reduce={true}
			/> 
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Dell"
				reduce={true}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Alienware"
				reduce={true}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Acer"
				reduce={true}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Lenovo"
				reduce={true}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptop />}
				text="Browse all"
				reduce={true}
			/>
		</div>
	);
};

const SidebarContentTelevisions = () => {
	const {
		televisionsClassName,
		televisionsRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={televisionsClassName}
			ref={televisionsRef}
		>
			<SidebarContentItem
        leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Sony"
			/> 
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Samsung"
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="LG"
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Panasonic"
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Vizio"
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Browse All"
			/>
		</div>
	);
};

const SidebarContentVideogames = () => {
	const {
		videogamesClassName,
		videogamesRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={videogamesClassName}
			ref={videogamesRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Playstation"
			/> 
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Xbox"
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Valve Vr"
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Gamer Notebooks"
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Browse All"
        divisable={false}
			/>
		</div>
	);
};

const SidebarContentMens = () => {
	const {
		mensClassName,
		mensRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={mensClassName}
			ref={mensRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="T-Shrits"
			/> 
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Pants"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Shoes"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Socks"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Underware"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Perfumes"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Browse All"
        divisible={false}
			/>
		</div>
	);
};

const SidebarContentWomans = () => {
	const {
		womansClassName,
		womansRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={womansClassName}
			ref={womansRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="T-Shirts"
			/> 
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Dresses"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Pants"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Shoes"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Socks"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Underware"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Perfumes"
			/>
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Browse All"
				divisible={false}
			/>
		</div>
	);
};

const SidebarContent = ({ contentClassName }) => {
	const { height, sidebarContentRef } = useContext(SidebarContentContext);

	return (
		<div 
			ref={sidebarContentRef}
			className={contentClassName}
			style={{ height: height }}
		>
			<SidebarContentPrimary />
			<SidebarContentSmartphones />
			<SidebarContentNotebooks />
			<SidebarContentTelevisions />
			<SidebarContentVideogames />
			<SidebarContentMens />
			<SidebarContentWomans />
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