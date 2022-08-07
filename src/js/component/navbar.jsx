
import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element, number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites.jsx";
import "../../styles/global.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const params = useParams(); 
	return (
		<nav className="navbar bg-star mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 star-text">Star Wars</span>
			</Link>
				
			<div className="ml-auto">
				<Favorites/>
			</div>
		</nav>
	);
};

 