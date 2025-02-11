import Cart from "../Cart/Cart";
import "./Header.scss";

const Header = () => (
	<header>
		<span>
			<img src="icon.svg" alt="ICON" />
			<h1>Rocks & Pebbles</h1>
		</span>
		<Cart />
	</header>
);

export default Header;