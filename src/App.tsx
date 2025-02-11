import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
	<>
		<Header />
		<main style={{height: "calc(100vh - 431px)"}}>
			<p>MAIN</p>
		</main>
		<Footer />
	</>
  )
}

export default App