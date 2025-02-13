import { productsDB } from "../../../data/productsDB";
import ProductCardContainer from "../ProductContainer/ProductCardContainer";
import "./Main.scss";

const Main = () => {
	return (
		<main className="Main">
			<ProductCardContainer products={productsDB} />
		</main>
	);
};

export default Main;
