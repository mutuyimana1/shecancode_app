
   
import { useContext, useState } from "react";
// import "./Publish.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function AddCats() {
  const [name, setName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
     name,
    };
  
    
    try {
      const res = await axios.post("/category", newPost);
      window.location.replace("/");
    } catch (err) {}
  };

    return (
  
            <div className="publish">

           

            <h1 className="publishingPageTitle">Publish your Story Here</h1>


          <form className="publishForm" onSubmit={handleSubmit}>
            
             
              <div class="row">
                <div class="col-25">
                  <label for="fname">Title</label>
                </div>
                <div class="col-75">
                  <input type="text"  placeholder="Title..." className="write"
                      autoFocus={true}
                      onChange={e=>setName(e.target.value)}/>
                </div>
              </div>
             
              
              <br/>
            {/* <div class="row"> */}
             <button className="writeSubmit" type="submit">Publish</button>

            {/* </div> */}
                
          </form>
            

            
        </div>
    )
}

