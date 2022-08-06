
import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element, number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const params = useParams(); 
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
				
			<div className="ml-auto">
				<Favorites/>
			</div>
		</nav>
	);
};

 