import { DropDownList } from "@progress/kendo-react-dropdowns";

import axios from "axios";
import { useContext, useEffect, useState,useMemo } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";


export default function SearchBar() {
    
  const [cats, setCats] = useState([]);

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
      
        <DropDownList className="droplist" data={cats.map(function(c) {return c.name;})} />
      
        </form>

    
    </section>
      );
};
