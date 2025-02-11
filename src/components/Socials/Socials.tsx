import "./Socials.scss";

const Socials = ({iconSize = "48px", direction = "row"}: {iconSize?:string; direction?:"row" | "column"}) => (
	<nav className="Socials" aria-label="Social media links">
		<ul style={{flexDirection: direction}}>
			<li><a href="https://github.com/VonRiddarn" target="_blank" rel="noopener noreferrer" ><img style={{width: iconSize}} src="/github-icon.svg" alt="Github" /></a></li>
			<li><a href="https://www.linkedin.com/in/timmyohman/" target="_blank" rel="noopener noreferrer"><img style={{width: iconSize}} src="/linkedin-icon.svg" alt="Linkedin" /></a></li>
		</ul>
	</nav>
);

export default Socials;