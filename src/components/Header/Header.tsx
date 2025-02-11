import Cart from "../Cart/Cart";
import Divider from "../Divider/Divider";
import "./Header.scss";

const Header = () => (
	<header>
		<section>
			<span>
				<img src="icon.svg" alt="ICON" />
				<h1>Rocks & Pebbles</h1>
			</span>
			<Cart />
		</section>
		<Divider />
	</header>
);

export default Header;