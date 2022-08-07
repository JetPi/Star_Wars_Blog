const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://swapi.dev/api/",
			charURL: "people/",
			planURL: "planets/",
			listURL: "http://assets.breatheco.de/apis/fake/todos/user/starwars",

			//Gets the data for Characters and Planets
			swapiChar:[],
			swapiPlan:[],
			// listApi:[],

			//Gets id of favorites characters or planets for future recall
			favoriteChars: [],
			favoritePlans: [],
		},

		actions: {
			//add favorite characters
			addFavoriteChar: (id) =>{
				const store = getStore()
				if(!store.favoriteChars.includes(id))
					{setStore({...store, 
						favoriteChars: [...store.favoriteChars, id]
					})}
			},
			/* ***************************** */

			//add favorite planets
			addFavoritePlan: (id) =>{
				const store = getStore()
				if(!store.favoritePlans.includes(id))
					{setStore({...store, 
						favoritePlans: [...store.favoritePlans, id]
					})}
			},
			/* ****************************** */

			//delete from favorites
			deleteFavoriteChar: (id)=>{
				const store = getStore()
				let test = store.favoriteChars.filter((element, index)=>{
					if(index != id){
						return element
					}
				})
				setStore({...store, 
					favoriteChars: test
				})
			},

			deleteFavoritePlan: (id)=>{
				const store = getStore()
				let test = store.favoritePlans.filter((element, index)=>{
					if(index != id){
						return element
					}
				})
				setStore({...store, 
					favoritePlans: test
				})
			},

			//fetch character data
			loadCharData: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.baseURL}${store.charURL}`)
					if(response.ok){
						let data = await response.json()
						if(response.status != 404){
							setStore({...store,
								swapiChar: data.results})
						}
					}
				} catch (error) {
					console.log(`Time to check for errors. Error ${error}` )
				}
			},
			/* ********************************* */

			//fetch planet data
			loadPlanData: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.baseURL}${store.planURL}`)
					if(response.ok){
						let data = await response.json()
						if(response.status != 404){
							setStore({...store,
								swapiPlan: data.results})
						}
					}
				} catch (error) {
					console.log(`Time to check for errors. Error ${error}` )
				}
			},
			/* *********************************** */
		}
	};
};

export default getState;
