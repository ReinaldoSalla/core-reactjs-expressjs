import React from "react";
import TopBar from "./components/TopBar/";
import "./App.css"

function Courosel() {
	return (
		<div>
			<p>todo Courosel</p>
		</div>
	);
}

function Content() {
	return (
		<div>
			<p>todo Content</p>
		</div>
	);
}

function Ads() {
	return (
		<div>
			<p>todo Ads</p>
		</div>
	);
}

function Footer() {
	return (
		<div>
			<p>todo Footer</p>
		</div>
	);
}

export default function App() {
  return (
    <div className="container">
      <div className="top-bar"> <TopBar /> </div>
      <div className="courosel"> <Courosel /> </div>
      <div className="content"> <Content /> </div>
      <div className="ads"> <Ads /> </div>
      <div className="footer"> <Footer /> </div>
    </div>
  );
}

