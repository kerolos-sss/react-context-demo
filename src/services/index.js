
/**
 * 
 * @param {string} user 
 * @param {string} pass 
 */



export const logIn = async (user, pass) => {
    return new Promise((resolve, reject) => {
        if (user == pass) {
            setTimeout(() => {
                let token = "TOKEN";
                setToken(token)
                resolve({
                    userId: user,
                    userToken: token 
                });
            }, 1000);
        } else {
            setTimeout(() => {
                reject(new Error("Authentication failed"));
            }, 3000);
        }
    });
}

export const signUp = (user, pass) => {
    return new Promise((resolve, reject) => {
        if (user == pass) {
            setTimeout(() => resolve({ message: "success" }), 1000);
        } else {
            setTimeout(() => {
                reject(new Error("SignUp error"));
            }, 3000);
        }
    });
}

export const setToken = (token) => {
    DataContainer.token = token;
}

export const getToken = () => {
    return DataContainer.token;
}
export class DataContainer {
    static token = null;
    static data = [
        {
            id: 1,
            title: "First Post",
            body: "First post body"
        },
        {
            id: 2,
            title: "Second Post",
            body: "Second post body"
        },
        {
            id: 3,
            title: "Third Post",
            body: "Third post body"
        },
        {
            id: 4,
            title: "Fourth Post",
            body: "Fourth post body"
        },
        {
            id: 5,
            title: "Fifth Post",
            body: "Fifth post body"
        },
        {
            id: 6,
            title: "Sixth Post",
            body: "Sixth post body"
        },
        {
            id: 7,
            title: "Seventh Post",
            body: "Seventh post body"
        },
    ];
}

export const getAllPosts = () => {
    // I want a fair chance of failure 
    let num = Math.random()
    return new Promise((resolve, reject) => {
        if (num >= 0.25) {
            setTimeout(() => resolve([...DataContainer.data]), 1000);
        } else {
            setTimeout(() => {
                reject(new Error("Data error"));
            }, 3000);
        }
    });
}

export const addPost = (post) => {
    // I want a fair chance of failure 
    let num = Math.random()
    return new Promise((resolve, reject) => {
        if (num >= 0.25) {

            setTimeout(() => {
                let ids = DataContainer.data.map(post => post.id);
                console.log("IDS", ids)

                let newId = Math.max(...[0, ...ids]) + 1;
                post.id = newId;
                DataContainer.data.push({ ...post });
                resolve(post);
            }, 1000);

        } else {
            setTimeout(() => {
                reject(new Error("Data error"));
            }, 3000);
        }
    });
}

export const editPost = (id, post) => {
    // I want a fair chance of failure 
    console.log("editPost");
    console.log(id, post)
    let num = Math.random()
    return new Promise((resolve, reject) => {
        if (num >= 0.25) {

            setTimeout(() => {

                let original = DataContainer.data.find(post => post.id == id);
                if (!original) {
                    reject(new Error("Resource Not Found"));
                    return;
                }
                DataContainer.data = DataContainer.data.map(p => p == original ? { ...post, id: id } : p );
                
                original = { ...post, id: id }
                resolve({ ...original });
            }, 1000);

        } else {
            setTimeout(() => {
                reject(new Error("Data error"));
            }, 3000);
        }
    });
}

export const deletePost = (id) => {
    // I want a fair chance of failure 
    let num = Math.random()
    return new Promise((resolve, reject) => {
        if (num >= 0.25) {

            setTimeout(() => {

                let originalIndex = DataContainer.data.findIndex(post => post.id == id);
                if (originalIndex == -1) {
                    reject(new Error("Resource Not Found"));
                    return;
                }
                DataContainer.data = DataContainer.data.filter(post => post.id != id);
                resolve({ message: "Deleted" });
            }, 1000);

        } else {
            setTimeout(() => {
                reject(new Error("Data error"));
            }, 3000);
        }
    });
}



// export default { logIn, signUp }
