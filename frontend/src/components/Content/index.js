import React from "react";
import { FaCartPlus } from "react-icons/fa";
import data from "../../data/";
import "./index.css";

function Title(props) {
	return (
		<span id="products-title">
			{props.title}
		</span>
	);
}

function Products(props) {
	return (
		<div className="products-grid">
			{data.map((product, index) => 
				<div key={index} className="product-grid">
					<span id="product-description">{product.description}</span>
					<img id="product-img" src={product.img}/>
					<span id="product-price">${product.price}</span>
					<span id="product-name">{product.name}</span>
					<FaCartPlus id="product-icon" />
				</div>
			)}
		</div>
	)
}

export default function Content() {
	return (
		<React.Fragment>
			<Title title="Best Offers" />
			<Products />
		</React.Fragment>
	);
}