// import { useContext, useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import { useContext, useEffect, useState } from "react";

import "./Publish.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [cats, setCats] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    console.log("user:",user._id);
    e.preventDefault();
    const newPost = {
      user: user._id,
      title,
      desc,
      category,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/Single/" + res.data._id);
    } catch (err) {}
  };
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category/all");
      setCats(res.data.data);
    };
    getCats();
  }, []);

  return (
    <div className="publish">
      {file && (
        <img className="publishImage" src={URL.createObjectURL(file)} alt="" />
      )}

      <h1 className="publishingPageTitle">Publish your Story Here</h1>

      <form className="publishForm" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-25">
            <label htmlFor="fileInput">
              <i class=" plusicon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div class="col-75"></div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="fname">Title</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              placeholder="Title..."
              className="write"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Category</label>
          </div>
          <div class="col-75">
            {/* <input
              type="text"
              placeholder=" Enter the Category...."
              className="writeCategory"
              autoFocus={true}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
            <DropDownList
              className="droplist"
              data={cats}
              textField="name"
              dataItemKey="_id"
              onChange={(e) => setCategory(e.target.value._id)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Subject</label>
          </div>
          <div class="col-75">
            <textarea
              placeholder="tell your story...."
              type="text"
              className="write writeStory"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <br />
        {/* <div class="row"> */}
        <button className="writeSubmit" type="submit">
          Publish
        </button>

        {/* </div> */}
      </form>
    </div>
  );
}
