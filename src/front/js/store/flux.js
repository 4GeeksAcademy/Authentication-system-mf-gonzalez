const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: null,
		},
		
		actions: {
            login: async (email, password) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/token", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        sessionStorage.setItem("token", data.token);
                        return true;
                    } else {
                        console.error("Login failed");
                        return false;
                    }
                } catch (error) {
                    console.error("There was an error logging in", error);
                    return false;
                }
            },

            Signup: async (email, password) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/signup", { 
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });
                    if (response.ok) {
                        return true;
                    } else {
                        console.error("Signup failed");
                        return false;
                    }
                } catch (error) {
                    console.error("There was an error signing up", error);
                    return false;
                }
            },
            getUser: async () => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/me", {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer " + sessionStorage.getItem("token")
                        }
                    });
                    const data = await response.json();
                    console.log(data);
                    if (response.ok) {
                        setStore({ user: data });
                    }
                } catch (error) {
                    console.error("There was an error fetching the user", error);
                }
            },

			logout: () => {
				sessionStorage.removeItem("token");
				setStore({ user: null });
			},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			
		}
	};
};

export default getState;