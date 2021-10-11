import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single"
import Publish from "./Pages/Publish/Publish";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./components/Footer/Footer";



import {BrowserRouter as Router,
   Route,
   Switch,
   link
   } from "react-router-dom";
 

function App() {
  return (
    <div className="App">
      {/* ShecanCode Blog */}
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Single"> <Single/></Route>
        <Route path="/Publish"><Publish/></Route>
        <Route path="/Login"><Login/></Route>
        <Route path="/Register"><Register/></Route>


      </Switch>
      {/* <Home/> */}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
