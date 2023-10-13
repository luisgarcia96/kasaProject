import "../src/styles/main.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HousingDetails from "./pages/HousingDetails";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
	return (
		<div className="App">
			<h1>Kasa Project</h1>
			<Header />
			<Home />
			<About />
			<NotFound />
			<HousingDetails />
			<Footer />
		</div>
	);
}

export default App;
