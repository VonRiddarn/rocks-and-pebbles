import Cart from "../Cart/Cart";
import CategoryRow from "../CategoryRow/CategoryRow";
import Divider from "../Divider/Divider";
import Searchbar from "../Searchbar/Searchbar";
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