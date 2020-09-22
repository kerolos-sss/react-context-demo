
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {{error: null | undefined | string, 
    *  posts: {id: number, title: string, body: string, successMessage: string | null | undefined}[] }}
    */
   export const postsReducer = (state = {}, action) => {
       console.log("PostsReducer")
       console.log(state)
       console.log(action)
       
       // if (state == null){
       //     state = {}
       // }
       switch (action.type) {
           case "fetch_posts_success":
               return { ...state, successMessage: action.payload.successMessage, error: null, posts: action.payload.posts };
           case "fetch_posts_error":
               return { ...state, successMessage: null, error: action.payload, posts: null };
   
           case "delete_post_success":
               state.posts = state.posts.filter(item => item.id != action.payload.id);
               return { ...state, successMessage: action.payload.successMessage, error: null, posts: [...state.posts] };
           case "delete_post_error":
               return { ...state, successMessage: null, error: action.payload }
   
           case "edit_post_success": {
               let postIndex = state.posts.findIndex(item => item.id = action.payload.id);
               const original = state.posts[postIndex];
               const post = { ...original, ...action.payload.data, id: original.id }
               state.posts[postIndex] = post;
               return { ...state, successMessage: action.payload.successMessage, error: null, posts: state.posts };
           }
           case "edit_post_error":
               return { ...state, successMessage: null, error: action.payload }
   
           case "add_post_success":
               const post = { ...action.payload.data, id: action.payload.id }
               state.posts.push(post);
               return { ...state, successMessage: action.payload.successMessage, error: null, posts: state.posts };
           case "add_post_error":
               return { ...state, successMessage: null, error: action.payload }
   
           default:
               return state;
       }
   }
   