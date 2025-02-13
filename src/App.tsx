import React from "react";
import "./App.scss";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";

function App() {
	const [filterText, setFilterText] = React.useState("");

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
