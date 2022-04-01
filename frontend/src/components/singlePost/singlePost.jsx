import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import apiCall from "../../helpers/apiCall";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { Popover, Affix } from "antd";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

export default function SinglePost() {
  const location = useLocation();
  const [blogUrl, setBlogUrl] = useState();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  // const PF = "http://localhost:4040/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [categories, setCategories] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      // console.log("bebbebe",path)
      const res = await axios.get(apiCall + "/posts/" + path);
      // console.log("laet",res)
      setPost(res.data.data);
      setTitle(res.data.data.title);
      setDesc(res.data.data.desc);
      setPhoto(res.data.data.photo);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(apiCall + `/posts/${post._id}`, {
        data: { username: user._id },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      console.log("username");
      await axios.patch(apiCall + `/posts/${post._id}`, {
        username: user._id,
        title,
        desc,
        photo,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
const convertToNormalText=(_description)=>{
var tempDiv=document.createElement("div");

tempDiv.innerHTML=_description;
return tempDiv.textContent||tempDiv.innerText||"";

}
  const ShareContent = (
    <>
      <FacebookShareButton
        url={"https://shecancode-blog.netlify.app" + location.pathname}
        quote={post?.title}
        hashtag={"#ShecancodeRWANDA"}
        description={convertToNormalText(desc).slice(0,150)}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> Facebook
      </FacebookShareButton><br/> <hr/>
      <LinkedinShareButton
        url={"https://shecancode-blog.netlify.app" + location.pathname}
        title={post?.title}
        source={"#ShecancodeRWANDA"}
        summary={convertToNormalText(desc).slice(0,150)}
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={32} round /> Linkedin
      </LinkedinShareButton> <br/> <hr/>
      <TwitterShareButton
        url={"https://shecancode-blog.netlify.app" + location.pathname}
        title={post?.title}
        hashtags={["ShecancodeRW"]}
        related={["ShecancodeRW"]}
        via={convertToNormalText(desc).slice(0,150)}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round /> Twitter
      </TwitterShareButton> <br/> <hr/>
      <EmailShareButton
        url={"https://shecancode-blog.netlify.app" + location.pathname}
        subject={post?.title}
        body={convertToNormalText(desc)}
        className="Demo__some-network__share-button"
      >
        <EmailIcon size={32} round /> Email
      </EmailShareButton> <br/> <hr/>
      <WhatsappShareButton
        url={"https://shecancode-blog.netlify.app" + location.pathname}
        title={post?.title}
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round /> Whatsapp
      </WhatsappShareButton>
    </>
  );

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img src={post?.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post?.title}
            {}

            {/* {post.categories} */}
            {post.user?.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.user?.username}`} className="link">
              <b> {post.user?.username}</b>
            </Link>
          </span>
          <span> Share:</span>
          <span className="singlePostDate">
            {new Date(post?.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          // <textarea
          //   className="singlePostDescInput"
          //   value={desc}
          //   onChange={(e) => setDesc(e.target.value)}
          // />

          <CKEditor
            editor={ClassicEditor}
            data={desc}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDesc(data);
            }}
          />
        ) : (
          // <p className="singlePostDesc">{desc}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

      <Affix offsetBottom={50}>
        <Popover content={ShareContent} placement="topRight">
          <Button variant="contained" color="success" endIcon={<ShareIcon />} style={{float:"right"}}>
            Share Post{" "}
          </Button>
        </Popover>
      </Affix>
    </div>
  );
}
