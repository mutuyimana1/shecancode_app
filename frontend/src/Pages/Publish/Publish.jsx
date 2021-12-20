import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useContext, useEffect, useState } from "react";
import apiCall from "../../helpers/apiCall";

import postBlog from "../../helpers/postBlog";

import "./Publish.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Publish() {
  const [cats, setCats] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);

  // trying to upload to claudinary

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pwdcevhp");
    data.append("cloud_name", "dhzndcjtz");
    fetch("  https://api.cloudinary.com/v1_1/dhzndcjtz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  // trying to upload to claudinary end  here

  const handleSubmit = async () => {

    // Blogpost data
    const newPost = {
      user: user._id,
      title,
      desc,
      category,
      photo: url,
    };

    await postBlog(newPost);

  };

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(apiCall + "/category/all");
      setCats(res.data.data);
    };
    getCats();
  }, []);

  return (
    <div className="publish">
      <h1 className="publishingPageTitle">Publish your Story Here</h1>
      <div>
        <div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button onClick={uploadImage}>Upload</button>
        </div>
        <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={url} width="100%" />
        </div>
      </div>
      <form className="publishForm" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-25">
            <label htmlFor="fileInput">
              <i class=" plusicon fas fa-plus"></i>
            </label>
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
            <DropDownList
              className="dropliste"
              placeholder="Choose Category..."
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
          <div class="col-75 ">
            <CKEditor
              editor={ClassicEditor}
              data="<p> Story Description </p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDesc(data);
                // console.log(data);
              }}
              onBlur={(event, editor) => {
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                // console.log("Focus.", editor);
              }}
            />

            {/* </textarea> */}
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
