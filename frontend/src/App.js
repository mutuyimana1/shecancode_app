import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Publish from "./Pages/Publish/Publish";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./components/footerLayer/footerLayer";
import Cats from "./components/Cats/Cats";
import Schedule from "./Pages/Schedule"
import Classes from "./components/classes/classes";
import Application from "./components/Application/Application";
import Navbar from "./components/navbar/navbar";

import { BrowserRouter as Router, Route, Switch, link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div
      className="App"
      style={{ margin: "0", padding: "0", boxSizing: "border-box" }}
    >
      {/* ShecanCode Blog */}
      <Router>
        {/* <Header />
         */}
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route exact path="/">
            {/* <Home /> */}
            <Classes />
          </Route>
=======
          {/* <Route exact path="/">
            <Home />
          </Route> */}
>>>>>>> 614214d9005e585ef3195faae993eb23357e3dd2
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

          <Route path="/Apply/frontend">
            <Application program="Frontend Web Development" />
          </Route>
          <Route path="/Apply/fullstack">
            <Application program=" Full-Stack Software Engineers" />
          </Route>
          <Route path="/">
            <Classes />
          </Route>
          <Route path="/applicant/:id">
            <Schedule />
          </Route>
        </Switch>
        {/* <Home/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
