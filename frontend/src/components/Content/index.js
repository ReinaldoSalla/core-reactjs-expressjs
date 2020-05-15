import React from "react";
import data from "../../data/";
import "./index.css";

export default function Content() {
	return (
		<div className="items">
			{data.map((product, index) => 
				<div key={index} className="item">
					<a id="content-link" href="https://google.com">
						<img id="content-img" src={product.img} alt={product.name} />
					</a>
				</div>
			)}
		</div>
	);
}