import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/global.css";
import "../../styles/demo.css";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let test = {}
	store.swapiPlan.filter((element, index)=>{
		if(index == params.id){
			return(
				test = element
			)
		}
	})

	return (
		<>
			<div className="container">
				<div className="col-12 fs-1 star-text">
					{test.name}
				</div>
				<div className="row">
					<div className="col-6 fs-3 star-text">
						Rotation Period: {test.rotation_period} <br/>
						Orbital Period: {test.orbital_period} <br/>
						Diameter: {test.diameter} km <br/>
						Gravity: {test.gravity} <br/>
					</div>
					<div className="col-6 fs-3 star-text">
						Terrain: {test.terrain} <br/>
						Surface Water: {test.surface_water} <br/>
						Population: {test.population} <br/>
					</div>
				</div>
			</div>
		</>
	);
};
