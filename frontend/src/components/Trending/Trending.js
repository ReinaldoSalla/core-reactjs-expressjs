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

const Loading = () => (
	<h1 className="loading">
		Loading
	</h1>
);

const calcInstallments = price => (price / 5).toFixed(2);

const Product = ({ name, price, img }) => (
	<div className="product-container">
		<span className="product-name">{name}</span>
		<img className="product-img" src={img} alt={name}/>
		<span className="product-price">
			${price} 
			<span className="product-installment">
				or 5x ${calcInstallments(price)}
			</span>
		</span>
		<span className="product-add">Add to cart</span>
	</div>
);

const ListProducts = ({ products }) => (
	products.map((product, index) => 
		<Product 
			key={index} 
			name={product.name} 
			price={product.price}
			img={product.img}
		/>
	)
);

const Products = ({ products }) => (
	<div className="products"> 
		<ListProducts products={products} /> 
	</div>
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

