# Redux - Thunk


[From redux documentation](https://redux.js.org/basics/store)
    - It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.


## Data Flow

    1. You call store.dispatch(action).
    2. The Redux store calls the reducer function you gave it.
    3. The root reducer may combine the output of multiple reducers into a single state tree.
    4. The Redux store saves the complete state tree returned by the root reducer.



 { type: 'LIKE_ARTICLE', articleId: 42 }
 { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
 { type: 'ADD_TODO', text: 'Read the Redux docs.' }

Think of an action as a very brief snippet of news. “Mary liked article 42.” or “'Read the Redux docs.' was added to the list of todos.”





[Async with redux thunk middleware](https://www.youtube.com/watch?v=z2XCUu2wIl0)