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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// //fetch list of favorites
			// getList: async () => {
			// 	const store = getStore()
			// 	try{
			// 		//fetch and push data into task lisk
			// 		let response = await fetch(`${store.listURL}`)
			// 		if(response.ok){
			// 		let data = await response.json()
			// 			if(response.status !== 404){
			// 				setStore({...store,
			// 					listApi: data
			// 				})
			// 			}
			// 		//if there is no data to push, post a new, empty list. Then recurse
			// 		}else{
			// 			let responseTodos = await fetch(`${store.listURL}` , 
			// 			{
			// 				method:"POST",
			// 				headers: {
			// 					"Content-Type":"application/json"
			// 				},
			// 				body: JSON.stringify([])
			// 			})
			// 			if(responseTodos.ok){
			// 				getActions().getList()
			// 			}
			// 		}
			// 	//Catch error
			// 	}catch(error){
			// 		console.log(`Explote este es el error: ${error}`)
			// 	}
			// },
			// /* ****************************************** */
		
			// //Add a task to list with APIs
			// addTaskToList: async (event) =>{
			// 	const store = getStore()
			// 	try{
			// 	let response = await fetch(`${listURL}`, 
			// 	{
			// 		method:"PUT",
			// 		headers: {
			// 			"Content-Type":"application/json"
			// 		},
			// 		//push listTask and the current task into the API
			// 		body: JSON.stringify({
			// 			...store, 
			// 			listApi: task
			// 		})
			// 	})
			// 	//Check if API is ok, then clear task and update listTask
			// 	if(response.ok){
			// 		getList()
			// 	}
			// 	}catch(error){
			// 		console.log(`Explote este es el error: ${error}`)
			// 	}
			// },

			// //Delete task from list of favorites
			// deleteTask: async (id) =>{
			// 	let newList = listTask.filter((item, index) => {
			// 		if(id !== index){
			// 			return item
			// 		}
			// 	})
			// 	try {
			// 		let response = await fetch(`${store.listURL}`,
			// 		{
			// 			method: "PUT",
			// 			headers: {
			// 				"Content-Type": "application/json"
			// 			},
			// 			body: JSON.stringify(newList)
			// 		})
			// 		if(response.ok){
			// 			getList()
			// 		}
			// 	} catch (error) {
			// 		console.log(`Explote este es el error: ${error}`)
			// 	}
			// },
			/* **************************************** */

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
					let response = await fetch(`https://swapi.dev/api/people/`)
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
					let response = await fetch(`https://swapi.dev/api/planets/`)
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

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
