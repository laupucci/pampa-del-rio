import { BrowserRouter, Route } from "react-router-dom";
import Background from "./components/background";
import Navbar from "./components/nav";
import Contact from "./components/contact";
import Spa from "./Spa";
import Info from "./components/information";
import Us from "./components/us";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Background} />
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Spa} />
      <Route exact path="/informacion" component={Info} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/ubicacion" component={Contact} />
      <Route exact path="/nosotros" component={Us} />
      {/* <Route path="/" component={Footer} /> */}
    </BrowserRouter>
  );
}

export default App;
