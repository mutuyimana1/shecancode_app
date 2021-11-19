
   
import { useContext, useState } from "react";
// import "./Publish.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function AddCats() {
  const [name, setName] = useState("");
  const [ description,setDescription]= useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
     name,description
    };
  
    
    try {
      const res = await axios.post("/category/create", newPost);
      window.location.replace("/");
      // console.log(res)
    } catch (err) { 
      console.log(err);
    }
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
              <div class="row">
                <div class="col-25">
                  <label for="fname">Description</label>
                </div>
                <div class="col-75">
                  <input type="text"  placeholder="About category" className="write"
                      autoFocus={true}
                      onChange={e=>setDescription(e.target.value)}/>
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

