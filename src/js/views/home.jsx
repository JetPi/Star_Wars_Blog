import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import "../../styles/global.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => 
	{
		const { store, actions } = useContext(Context)

		return(
			//Container of characters
			<div className="container container-fluid bg-star">
				<div className="col-12 fs-1 star-text">
					Characters
				</div>
				<div className="row flex-row flex-nowrap card-scroll" >
					{store.swapiChar.map((element, index)=>{
						return(
						<div className="col-4" key={index}>
							<div className="card bg-star">
								<img src="https://w7.pngwing.com/pngs/302/601/png-transparent-lego-star-wars-anakin-skywalker-logo-jedi-star-wars-text-war-film.png" className="card-img-top" alt="..."/>
								<div className="card-body">
									<div className="d-flex flex-column align-items-center py-2">
										<h5 className="card-title star-text">{element.name}</h5>
										<p className="card-text star-text">
											Height: {element.height} cm <br/>
											Hair Color: {element.hair_color} <br/>
											Gender: {element.gender} <br/>
										</p>
									</div>
									<div className="d-flex justify-content-between">
										{/* Links to a page of Character Details */}
										<Link to={`/character/${index}`}>
											<button href="#" className="btn btn-bg-star star-text">Learn More</button>
										</Link>
										<button className="btn btn-bg-star star-text" onClick={() => actions.addFavoriteChar(element)}><i className="fa-solid fa-heart"></i></button>
									</div>
								</div>
							</div>
						</div> )
					})}	
				</div>
				{/* **************************************************************************************** */}

				{/* Container of planets */}
				<div className="col-12 fs-1 star-text">
					Planets
				</div>
				<div className="row flex-row flex-nowrap card-scroll" >
					{store.swapiPlan.map((element, index)=>{
						return(
						<div className="col-4" key={index}>
							<div className="card bg-star">
								<img src="https://w7.pngwing.com/pngs/302/601/png-transparent-lego-star-wars-anakin-skywalker-logo-jedi-star-wars-text-war-film.png" className="card-img-top" alt="..."/>
								<div className="card-body">
									<div className="d-flex flex-column align-items-center py-2">
										<h5 className="card-title star-text">{element.name}</h5> 
										<p className="card-text star-text">
											Climate: {element.climate} <br/>
											Terrain: {element.terrain} <br/>
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-end " style={{height: "100%"}}>
									{/* Links to planet details */}
										<Link to={`/planet/${index}`}>
											<button href="#" className="btn btn-bg-star star-text">Learn More</button>
										</Link>
										<button className="btn btn-bg-star star-text" onClick={() => actions.addFavoritePlan(element)}><i className="fa-solid fa-heart"></i></button>
									</div>
								</div>
							</div>
						</div> )
					})}	
				</div>
				{/* **************************************************************************************** */}
			</div>
		)
	};
