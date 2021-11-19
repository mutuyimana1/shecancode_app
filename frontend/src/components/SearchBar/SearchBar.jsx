import { DropDownList } from "@progress/kendo-react-dropdowns";

import axios from "axios";
import { useContext, useEffect, useState,useMemo } from "react";
import { Link ,useHistory} from "react-router-dom";
import "./SearchBar.css";
import {Space} from "antd"


export default function SearchBar() {
  const history = useHistory();
    
  const [cats, setCats] = useState([]);
  const [catDesc, setCatDesc] = useState("");

  let categories=[];

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category/all");
      setCats(res.data.data);
    };
    getCats();

    cats.map(function(obj) {return categories.push(obj.categories)})
    console.log(categories);
  }, []);
  

  
  

  return (
    <section className="searchBar">
      <form className="searchOption">
 

        <label className="categoryTitle"> Filter By Category</label>
      
        
 
        <DropDownList
              className="droplist"
              data={cats}
              textField="name"
              dataItemKey="_id"
              onChange={(e) => {history.push(`/?cat=${e.target.value._id} `); setCatDesc(e.target.value.description)}}
            />
            <label className="catDescription"> {catDesc}</label>

        </form>

    
    </section>
      );
};
