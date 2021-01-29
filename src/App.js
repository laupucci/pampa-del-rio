import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Navbar from './components/nav'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Navbar} />
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    {/* <Route path="/" component={Footer} /> */}
    </BrowserRouter>
  );
}

export default App;
