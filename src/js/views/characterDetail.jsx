import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/global.css";

export const CharacterDetail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let test = {}
	store.swapiChar.filter((element, index)=>{
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
					Birth Year: {test.birth_year} <br/>
					Gender: {test.gender} <br/>
					Height: {test.height} cm <br/>
					Weight: {test.mass} kg <br/>
				</div>
				<div className="col-6 fs-3 star-text">
					Hair: {test.hair_color} <br/>
					Skin Color: {test.skin_color} <br/>
					Eye Color: {test.eye_color} <br/>
				</div>
			</div>
		</div>
		</>
	);
};

CharacterDetail.propTypes = {
	match: PropTypes.object
};
