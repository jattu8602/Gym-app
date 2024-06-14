import express from "express";
import {config} from "dotenv";
import cors from "cors";
import {} from "./utils/sendEmail.js"

const app = express();
const router = express.Router();

config({path: "./config.env"});
console.log(process.env.PORT);

app.use(cors({
  origin: [process.env.FORNTEND_URL],
  credentials: true,
  methods:["POST"]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.post("/send/mail",async(req,res,next)=>{
  const{ name,email,message}=req.body;
  if(!name||!email||!message) return next(res.status(400).json({
    success:false,
    message:"Please fill all the fields",
  })
);
try{
  await sendEmail({
    email: "chaurasiyajatin68@gmail.com",
    subject:"GYM Website Contact",
    message,
    userEmail:email,
    // user:name,
  });
  res.status(200).json({
    success:true,
    message:"Email Sent Successfully",
  });
}catch(error){
  res.status(500).json({
    success:false,
    message:"Something Went Wrong",
  });

}






}
);

router.get("/",(req,res,next)=>{
  res.json({success:true,
    message:"HEY"
  });
});
app.use(router);

app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})