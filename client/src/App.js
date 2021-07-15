import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./pages/authentications/Login";
import Registration from "./pages/authentications/Registration";
import Navbar from './components/navigations/Navbar';
import Game from './pages/Game/Game';
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <Router>
      <main className="main-content">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/game" component={Game} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;