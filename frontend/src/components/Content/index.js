import React from "react";
import { FaCartPlus } from "react-icons/fa";
import data from "../../data/";
import "./index.css";

export default function Content() {
	return (
		<div className="items">
			{data.map((product, index) => 
				<div key={index} className="item">
					<a id="content-link" href="https://google.com">
						<img id="content-img" src={product.img} alt={product.name} />
						<h1 id="product-name">{product.name}</h1>
						<h4 id="product-description">{product.desscription}</h4>
					</a>
					<div className="price-add">
						<h5 id="product-price">${product.price}</h5>
						<FaCartPlus id="price-add"/>
					</div>
				</div>
			)}
		</div>
	);
}