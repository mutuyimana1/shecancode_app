import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from"./routes/auth";
import userRoute from"./routes/users";
import postRoute from"./routes/posts";
import categoryRoute from"./routes/category";
import multer from"multer";
import path from"path";


const app = express();

dotenv.config("./.env");
app.use(express.json());
// to make image displayed
app.use("/images", express.static(path.join(__dirname,"/images")))

<<<<<<< HEAD
mongoose.connect(process.env.DATABASE_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,                                                                                                                                                                                     
    // useCreateIndex: true,
 }).then(console.log("database is runing"))
=======
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,                                                                                                                                                                                     
    // useCreateIndex: true,
 }).then(console.log("database is connected"))
>>>>>>> 9344f642762c9903386ceef2cc2a2f2abbbd046a
  .catch ((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },filename:(req,file,cb) => {
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res) =>{
    res.status(200).json("file has been uploaded");
})
app.use("/api/auth",authRoute),
app.use("/api/users",userRoute),
app.use("/api/posts",postRoute),
app.use("/api/category",categoryRoute)

<<<<<<< HEAD

app.listen("5000",() => {
    console.log("backend is runing"); 
=======
app.use("/",(req,res)=>{
    return res.status(202).json({
        message:"welcome to shecancode blog"
    })
})

const port =process.config.PORT || 4040;
app.listen(port,() => {
    console.log("backend is runing ON "+port); 
>>>>>>> 9344f642762c9903386ceef2cc2a2f2abbbd046a
});   