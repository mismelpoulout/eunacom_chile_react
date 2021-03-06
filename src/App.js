import "./App.css";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {Home} from "./components/Home";

import {AuthProvider} from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;