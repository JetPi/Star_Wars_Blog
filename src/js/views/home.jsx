import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => 
	{
		const { store, actions } = useContext(Context)

		return(
			//Container of characters
			<div className="container container-fluid">
				<div className="col-12 fs-1">
					Characters
				</div>
				<div className="row flex-row flex-nowrap cardScroll" >
					{store.swapiChar.map((element, index)=>{
						return(
						<div className="col-3" key={index}>
							<div className="card">
								<img src="" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text">
										Height: {element.height} cm <br/>
										Hair Color:{element.hair_color} <br/>
										Gender:{element.gender} <br/>
									</p>
									{/* Directs to a page of Character Details */}
									<Link to={`/character/${index}`}>
										<button href="#" className="btn btn-primary">Learn More</button>
									</Link>
									<button className="btn btn-primary" onClick={() => actions.addFavoriteChar(element)}><i className="fa-solid fa-heart"></i></button>
								</div>
							</div>
						</div> )
					})}	
				</div>
				{/* **************************************************************************************** */}

				{/* Conatainer of planets */}
				<div className="col-12 fs-1">
					Planets
				</div>
				<div className="row flex-row flex-nowrap cardScroll" >
					{store.swapiPlan.map((element, index)=>{
						return(
						<div className="col-3" key={index}>
							<div className="card">
								<img src="" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text">
										Climate: {element.climate} <br/>
										Terrain: {element.terrain} <br/>
									</p>
									{/* Links to planet details */}
									<Link to={`/planet/${index}`}>
										<button href="#" className="btn btn-primary">Learn More</button>
									</Link>
									<button className="btn btn-primary" onClick={() => actions.addFavoritePlan(element)}><i className="fa-solid fa-heart"></i></button>
								</div>
							</div>
						</div> )
					})}	
				</div>
				{/* **************************************************************************************** */}
			</div>
		)
	};
