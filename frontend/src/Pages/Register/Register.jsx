import axios from "axios";
import { useState } from "react";
import { Link} from "react-router-dom";
import "./Register.css";
import apiCall from "../../helpers/apiCall";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  

  const handleSubmit = async (e) => {
     e.preventDefault();
     setError(false);
    try {
      const res = await axios.post(apiCall+"/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);

      
    }
  };
  
    return (
      <div className="register">
        <div classNme="containere">
          <div class="row">
            <div class="col-sm-6">
              <div className="RegisterImage">

              </div>
            {/* <img src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/> */}

            </div>
      <div class="col-sm-6">
 
       
        <form className="registerForm" onSubmit={handleSubmit}>
            <h1 className="title">Register</h1>
                 <label>Username</label>
                <input type="text" className="registerInput" placeholder="Please enter your username...."
                          onChange={(e) => setUsername(e.target.value)}

                />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Please enter your email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="text"  className="registerInput" placeholder="Please enter your password"
                           onChange={(e) => setPassword(e.target.value)}

                />
                <button className="registersubmit" type="submit">Register</button>
                <p>If you Already have an Acaunt Please  
                <button className="registerLogin">
              <Link className="link" to="/login">
               Login
              </Link>
            </button>
            </p>

            </form>
           
               {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong with your Registration!</span>}
       </div>
       </div>
    </div>

</div>
    )

}
