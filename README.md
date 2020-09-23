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


# What is a React state
    - It is a value that has some way to be modified, it is always watched when rendered in the mounted React Component Hierarchy 

# What is a Reducer
    - is a function that takes the current state, and an action. It then applies the action to the state and returns the resulting state

# What is the action
    - a normal JavaScript object.
    - it just has to be understandable by the reducer.
    - the convention is to use the `type` key.
    - some middleware may use the type key so it is best to use it.
    ``` 
    { 
        type: "SOME_ACTION", 
        payload: {}
    } 
    ``` 
# Action Creators
    - helper functions given parameters they give off an action


# Context uses a provider that provides values to the sub hierarchy .

    - Providing a state (React State) and some actions to modify it can do the whole trick of 
    - As long as the Provider component is mounted it will provide the values to the subsequent children
    - Multiple providers for different context types may be used
    - A useContext child or a Context.Consumer component will use the context of it's nearest ancestor 

