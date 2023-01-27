import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Publish from "./Pages/Publish/Publish";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Cats from "./components/Cats/Cats";
import Classes from "./components/classes/classes";
import Application from "./components/Application/Application";
import LoginPage from "./components/login";
import Navbar from "./components/navbar/navbar";

import { BrowserRouter as Router, Route, Switch, link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import DashboardLayout from "./components/dashboard/dashboardLayout";
import Sidebar from "./components/dashboard/sideBar";
import Applicants from "./components/dashboard/applicants";
import DashboardHome from "./components/dashboard/dashboardHome";
import SignUpPage from "./components/signUp";
import FrontendApplicant from "./components/dashboard/frontendApplicants";
import FullStackApplicants from "./components/dashboard/fullStackApplicants";
import DayClassApplicants from "./components/dashboard/dayClass";
import EveningClassApplicants from "./components/dashboard/eveningClass";

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
        {/* <Navbar /> */}
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
          <Route path="/signin">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
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
          <Route path="/program">
            <Classes />
          </Route>
        </Switch>
        {/* <Home/> */}

        <Route path="/dashboard">
          {" "}
          <DashboardLayout />
        </Route>
        <Route path="/applicants">
          {" "}
          <Applicants />
        </Route>
        <Route path="/fullstack">
          {" "}
          <FullStackApplicants />
        </Route>
        <Route path="/day">
          {" "}
          <DayClassApplicants />
        </Route>
        <Route path="/evening">
          {" "}
          <EveningClassApplicants />
        </Route>
        <Route path="/side">
          {" "}
          <Sidebar />
        </Route>
        <Route path="/dashhome">
          {" "}
          <DashboardHome />
        </Route>
        <Route path="/frontend">
          {" "}
          <FrontendApplicant />
        </Route>
        <Route path="/login">
          {" "}
          <Login />
        </Route>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
