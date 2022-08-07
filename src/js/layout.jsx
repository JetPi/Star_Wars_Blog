import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import "../styles/global.css";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Home } from "./views/home.jsx"
import { PlanetDetail } from "./views/planetDetail.jsx"
import { CharacterDetail } from "./views/characterDetail.jsx"


//create your first component
const Layout = (props) => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-stardom">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route  path="/" element={<Home />} />
						<Route  path="/planet/:id" element={<PlanetDetail />} />
						<Route  path="/character/:id" element={<CharacterDetail />} />
						<Route  path="/*" element={<p>Not found</p>} />	
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
