import listProducts from "../services/products-service";

const configureRoutes = (app) => {
	app.route("/products").get(listProducts)
};

export default configureRoutes;