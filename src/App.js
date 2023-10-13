import "../src/styles/main.scss";
import AppRouter from "./router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* Note for myself: The BrowserRouter should envelop the Header and Footer because it will give the context for the <Link /> that are used within those components */}
			<BrowserRouter>
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>	
		</div>
	);
}

export default App;
