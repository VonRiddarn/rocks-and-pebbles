import Cart from "../../ui/Cart/Cart";
import CategoryRow from "../../features/CategoryRow/CategoryRow";
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
			<Cart />
		</section>
		<Divider />
		<CategoryRow />
	</header>
);

export default Header;