import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "./redux/actions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./pages/authentications/Login";
import Registration from "./pages/authentications/Registration";
import Home from "./pages/country/Home";

function App() {
  const dispatch = useDispatch()
  const country = useSelector(state => state.country);

  const getCountry = () => {
    dispatch(getCountryByName("bangladesh"));
  }

  return (
    <Router>
      <main className="main-content">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;