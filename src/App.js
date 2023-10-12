import "./App.css";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Home from "./pages/home";
import HousingDetails from "./pages/housingDetails";

function App() {
	return <div className="App">
    <h1>Kasa Project</h1>
    <Home />
    <HousingDetails />
    <About />
    <NotFound />
  </div>;
}

export default App;
