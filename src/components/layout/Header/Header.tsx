import CartIcon from "../../features/Cart/CartIcon";
import CategoryList from "../../features/CategoryRow/CategoryList";
import Divider from "../../ui/Divider/Divider";
import Searchbar from "../../ui/Searchbar/Searchbar";
import "./Header.scss";

const Header = () => (
	<header className="Header">
		<section>
			<span>
				<img src="icon.svg" alt="ICON" />
				<h1>Rocks & Pebbles</h1>
			</span>
			<Searchbar width="80%"/>
			<CartIcon />
		</section>
		<Divider />
		<CategoryList />
	</header>
);

export default Header;