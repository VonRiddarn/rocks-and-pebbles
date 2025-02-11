import "./Searchbar.scss";

const Searchbar = ({height = "48px", width="33%"}: {height?:string; width?:string}) => (
	<section className="Searchbar" style={{height: height, width: width}}>
		<form style={{borderRadius: height}}>
			<input type="text" style={{width: `calc(100% - ${height})`}} placeholder="Search..." />
			<button style={{height: height}}>
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="currentcolor"/>
				</svg>
			</button>
		</form>
	</section>
);

export default Searchbar;