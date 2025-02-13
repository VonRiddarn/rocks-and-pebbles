import CartIcon from "../../features/Cart/CartIcon/CartIcon";
import CategoryList from "../../features/CategoryRow/CategoryList/CategoryList";
import Divider from "../../ui/Divider/Divider";
import Searchbar from "../../features/search/Searchbar/Searchbar";
import "./Header.scss";
import CategoryListing from "../../features/CategoryRow/CategoryListing/CategoryListing";

const Header = () => (
	<header className="Header">
		<section>
			<span>
				<img src="icon.svg" alt="ICON" />
				<h1>Rocks & Pebbles</h1>
			</span>
			<Searchbar width="80%" />
			<CartIcon />
		</section>
		<Divider />
		<CategoryList>
			<CategoryListing title="Igneous" />
			<CategoryListing title="Sedimentary" />
			<CategoryListing title="Metamorphic" />
			<CategoryListing title="Granite" />
			<CategoryListing title="Limestone" />
			<CategoryListing title="Marble" />
			<CategoryListing title="Special" />
		</CategoryList>
	</header>
);

export default Header;
