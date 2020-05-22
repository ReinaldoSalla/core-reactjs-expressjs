const listProducts = (req, res) => {
	const data = {
		title: "Products",
		items: [
			{id: 1, name: "television", price: 10000},
			{id: 2, name: "shaver", price: 20000},
			{id: 3, name: "notebook", price: 30000}
		]
	};
	console.log("GET localhost:8080/products");
	res.json(data);
};

export default listProducts;