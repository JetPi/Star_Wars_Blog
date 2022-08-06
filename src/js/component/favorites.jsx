import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element, number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();   
    
	return (
		<>
		<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
					Dropdown button
				</button>
				<ul className="dropdown-menu">   
					<li>Characters</li>
					{store.favoriteChars.map((element, index)=>{
						return(
							<div className="col-12 d-flex justify-content-between" key={index}>
								<li className="list-group-item d-flex justify-content-between">{element.name} </li>
								<button className="btn btn-primary" onClick={() => actions.deleteFavoriteChar(index)}><i className="fa-solid fa-trash"></i></button>
							</div>
						)
					})}
					<li>Planets</li>
					{store.favoritePlans.map((element, index)=>{
						return(
							<div className="col-12 d-flex justify-content-between" key={index}>
								<li className="list-group-item d-flex justify-content-between">{element.name} </li>
								<button className="btn btn-primary" onClick={() => actions.deleteFavoritePlan(index)}><i className="fa-solid fa-trash"></i></button>
							</div>
						)
					})}
				</ul> 
			</div>
        </>
	);
};
