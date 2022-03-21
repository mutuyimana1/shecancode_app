import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Publish from "./Pages/Publish/Publish";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Cats from "./components/Cats/Cats";
import Application from "./components/Application/Application";

import { BrowserRouter as Router, Route, Switch, link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App" style={{margin:"0",padding:"0",boxSizing:"border-box"}}>
      {/* ShecanCode Blog */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Single">
            {" "}
            <Single />
          </Route>
          <Route path="/Publish">
            <Publish />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Cats">
            <Cats />
          </Route>

          <Route path="/Application">
            <Application />
          </Route>
        </Switch>
        {/* <Home/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
