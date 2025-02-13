import CartIcon from "../../features/Cart/CartIcon/CartIcon";
import CategoryList from "../../features/CategoryRow/CategoryList/CategoryList";
import Divider from "../../ui/Divider/Divider";
import Searchbar from "../../features/search/Searchbar/Searchbar";
import "./Header.scss";
import CategoryListing from "../../features/CategoryRow/CategoryListing/CategoryListing";
import { FilterTextState } from "../../../App";

const Header = (state: FilterTextState) => (
	<header className="Header">
		<section>
			<span>
				<img src="icon.svg" alt="ICON" />
				<h1>Rocks & Pebbles</h1>
			</span>
			<Searchbar state={state} width="80%" />
			<CartIcon />
		</section>
		<Divider />
		<CategoryList>
			<CategoryListing title="Igneous" />
			<CategoryListing title="Sedimentary" />
			<CategoryListing title="Metamorphic" />
			<CategoryListing title="Special" />
		</CategoryList>
	</header>
);

export default Header;
