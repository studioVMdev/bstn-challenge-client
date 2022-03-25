import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<App />
		</Router>
		<Footer/>
	</React.StrictMode>,
	document.getElementById("root")
);
