import "./Socials.scss";

const Socials = ({iconSize = "48px", direction = "row"}: {iconSize?:string; direction?:"row" | "column"}) => (
	<nav className="Socials" aria-label="Social media links">
		<ul style={{flexDirection: direction}}>
			<li><a href="#"><img style={{width: iconSize}} src="/github-icon.svg" alt="Github" /></a></li>
			<li><a href="#"><img style={{width: iconSize}} src="/linkedin-icon.svg" alt="Linkedin" /></a></li>
		</ul>
	</nav>
);

export default Socials;