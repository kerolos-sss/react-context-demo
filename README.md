
# Context uses a provider that provides values to the sub hierarchy .

    - Providing a state (React State) and some actions to modify it can do the whole trick of 
    - As long as the Provider component is mounted it will provide the values to the subsequent children
    - Multiple providers for different context types may be used
    - A useContext child or a Context.Consumer component will use the context of it's nearest ancestor 


[V good tutorial](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

[REF](https://reactjs.org/docs/context.html#consuming-multiple-contexts)



```


// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
  render() {
    const {signedInUser, theme} = this.props;

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
```