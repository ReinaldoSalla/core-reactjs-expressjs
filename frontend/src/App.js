import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarProvider";
import Courosel from "./components/Courosel";
import Content from "./components/Content";

import "./App.css"

function Todo(props) {
	return <span>todo {props.name}</span>
}

function App() {
  return (
  	<React.Fragment>
	    <div className="app-grid">
	    	<SidebarProvider>
		    	<div className="topbar">
		    		<Topbar />
		    	</div>
		    	<div className="sidebar">
		    		<Sidebar />
		    	</div>
	    	</SidebarProvider>
	    	<div className="courosel">
	    		<Courosel />
	    	</div>
	    	<div className="content">	
	    		<Content />
	    	</div>
	    	<div className="footer">
	    		<Todo name="Footer" />
	    	</div>
	    </div>
	  </React.Fragment>
  );
}

export default App;

