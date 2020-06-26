
import React, { useState, Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const containerOpacityClassName = isSidebarVisible
    ? "container-opacity-on"
    : "container-opacity-off";
  const sidebarIconClassName = isSidebarVisible
    ? "sidebar-icon-on"
    : "sidebar-icon-off";
  const sidebarContentClassName = isSidebarVisible
    ? "sidebar-content-on"
    : "sidebar-content-off";
  
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

	return (
		<Fragment>
			<Topbar 
        sidebarIconClassName={sidebarIconClassName}
        sidebarContentClassName={sidebarContentClassName}
        toggleSidebar={toggleSidebar}
      />
      <div className={containerOpacityClassName}>
  			<Courosel />
  			<Trending />
  			<Categories />
        <Footer />
      </div>
		</Fragment>                                                        
	);
};

export default App;     