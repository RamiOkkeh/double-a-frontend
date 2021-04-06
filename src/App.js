import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/HomePage"
import List from "./components/List"
import Item from "./components/Item"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Purchase from "./components/Purchase"
import './App.css';

function App() {
  return (<>
    <Router>
      <NavBar/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/list" component={List} />
          <Route path="/item" component={Item} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
      </Switch>
    </Router>
  </>);
}

export default App;
