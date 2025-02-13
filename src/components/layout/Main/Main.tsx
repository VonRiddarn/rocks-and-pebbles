import { FilterTextState } from "../../../App";
import { productsDB } from "../../../data/productsDB";
import ProductCardContainer from "../ProductContainer/ProductCardContainer";
import "./Main.scss";

const Main = (state: FilterTextState) => {
	return (
		<main className="Main">
			<ProductCardContainer state={state} products={productsDB} />
		</main>
	);
};

export default Main;
