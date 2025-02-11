import './App.scss'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'

function App() {

  return (
	<>
		<Header />
		<main style={{height: "calc(100vh - 281px)"}}>
			<p>MAIN</p>
		</main>
		<Footer />
	</>
  );
}

export default App