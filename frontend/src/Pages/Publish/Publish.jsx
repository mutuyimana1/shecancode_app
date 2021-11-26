import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useContext, useEffect, useState } from "react";
import apiCall from "../../helpers/apiCall";
import cloudinary from "../../helpers/cloudinary";

import "./Publish.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Publish() {

  const [cats, setCats] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  // trying to upload to claudinary

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  // trying to upload to claudinary end  here

  const handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    this.setState({
      content: data,
    });
  };

  const handleSubmit = async () => {
    // Blogpost data
    const newPost = {
      user: user._id,
      title,
      desc,
      category
    };
      // const res = await axios.post(apiCall + "/posts", newPost);




    fetch(apiCall+"/posts", {
      method: "post",
      body:JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setUrl(data.url);

      window.location.replace("/Single/" +data.data._id);
      })


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
      {/* {file && (
        <img className="publishImage" src={URL.createObjectURL(file)} alt="" />
      )} */}
      {previewSource && (
        <img
          src={previewSource}
          alt="chosen"
          // style={{ height: '300px' }}
          className="publishImage"
        />
      )}

      <h1 className="publishingPageTitle">Publish your Story Here</h1>

      <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <button onClick={uploadImage}>Upload</button>
            <img src={url} width="35%" />

      <form className="publishForm" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-25">
            <label htmlFor="fileInput">
              <i class=" plusicon fas fa-plus"></i>
            </label>
            {/* <input type="file" id="fileInput" style={{ display: "none" }} 
                    onChange={(e) => setFile(e.target.files[0])}/> */}
            {/* <input
              id="fileInput"
              type="file"
              name="image"
              // onChange={handleFileInputChange}
              onChange={(e) => setImage(e.target.files[0])}
              value={fileInputState}
              className="form-input"
            /> */}
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
