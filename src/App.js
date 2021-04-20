import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/forgetPassword">
            <ForgetPassword/>
          </Route>
          <Route path="/resetPassword">
           <ResetPassword/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="*">
            <h1>Not found!!!</h1>
          </Route>
        </Switch>
      </Router>
     
  
    </div>
  );
}

export default App;
