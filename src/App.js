import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Navbar from './components/nav'
import Footer from './components/footer'
import Ubication from './components/ubication'
import Us from './components/us'
import Contact from './components/contact'
import Information from './components/information'
require('dotenv').config()
//import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Navbar} />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ubicacion" component={Ubication} />
    <Route exact path="/nosotros" component={Us} />
    <Route exact path="/informacion" component={Information} />
    <Route exact path="/contacto" component={Contact} />
    </Switch>
    <Route path="/" component={Footer} />
    </BrowserRouter>
  );
}

export default App;
