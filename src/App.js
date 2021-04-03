import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (<>
    <Router>
      <NavBar/>
      <Switch>
          {/* <Route path="/" exact component={Home}/> */}
          {/* <Route path="/signin" component={SignIn}/> */}
          {/* <Route path="/signup" component={SignUp}/> */}
          {/* <Route path="/profile" component={Profile} /> */}
      </Switch>
    </Router>
  </>);
}

export default App;
