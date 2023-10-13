import "../src/styles/main.scss";
import AppRouter from "./router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
}

export default App;
