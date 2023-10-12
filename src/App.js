import "../src/styles/main.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HousingDetails from "./pages/HousingDetails";

function App() {
	return (
		<div className="App">
			<h1>Kasa Project</h1>
			<Home />
			<About />
			<NotFound />
			<HousingDetails />
		</div>
	);
}

export default App;
