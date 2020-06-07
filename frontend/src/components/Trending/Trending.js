import React, { 
	useEffect,
	useState
} from "react";
import "./Trending.css";

const Title = ({ title }) => (
	<h1 className="trending-title">
		{title}
	</h1>
);

const Loading = () => <h1>Loading</h1>;

const Product = ({ name, price }) => (
	<li> 
		{name}, {price} 
	</li>
);

const ListProducts = ({ products }) => (
	products.map((product, index) => 
		<Product 
			key={index} 
			name={product.name} 
			price={product.price}
		/>
	)
);

const Products = ({ products }) => (
	<ul> 
		<ListProducts products={products} /> 
	</ul>
);

const Loader = ({ isLoading, products }) => (
	isLoading 
		? <Loading /> 
		: <Products products={products}/>
);

const Trending = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8080/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.products);
				setIsLoading(false);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="trending">
			<Title title="Trending" />
			<Loader isLoading={isLoading} products={products}/>
		</div>
	)
};

export default Trending;

