const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors=require('cors')
const User=require('./Models/Women.js');
const MenUser=require('./Models/Men.js');
const Item=require('./Models/Item.js');
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Arsh23:Vseorv1A5XP6mbAL@cluster0.ej19ibe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("connection successfully");
})
.catch((e)=>{
  console.log(e);
});
const Emp=require('./Models/User');
app.use(cors());
app.use(express.json());
app.use(express.json());
//for creating 
app.post("/shop",async(req,res)=>{
   try{
       const addingWomen=new User(req.body);
       const insertWomen=await addingWomen.save();
       res.status(201).send(insertWomen);
   }
   catch(e){
    res.status(400).send(e);
   } 
});


app.post("/shop/Men",async(req,res)=>{
  try{
      const addingMen=new MenUser(req.body);
      const insertMen=await addingMen.save();
      res.status(201).send(insertMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});

app.post("/shop/Item",async(req,res)=>{
  try{
      const addingItem=new 
      Item(req.body);
      const insertMen=await addingItem.save();
      res.status(201).send(insertMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});


// for getting request

app.get('/shop', async (req, res) => {
  try {
      const getWomen = await User.find({});
      res.status(200).json(getWomen);
  } catch (e) {
      res.status(400).send(e);
  }
});


app.get('/shop/Men', async (req, res) => {
  try {
      const getMen = await MenUser.find({});
      res.status(200).json(getMen);
  } catch (e) {
      res.status(400).send(e);
  }
});

app.get('/shop/Item', async (req, res) => {
  try {
      const getMen = await Item.find({});
      res.status(200).json(getMen);
  } catch (e) {
      res.status(400).send(e);
  }
});



// for getting individual 

app.get("/shop/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getWomen=await User.findById({_id});
      res.send(getWomen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});

app.get("/shop/Men/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await MenUser.findById({_id});
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});

app.get("/shop/Item/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await Item.findById({_id});
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});


// patch request

app.patch("/shop/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getWomen=await User.findByIdAndUpdate(_id,req.body,{
        new:true
      }
    );
      res.send(getWomen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});


app.patch("/shop/Men/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await MenUser.findByIdAndUpdate(_id,req.body,{
        new:true
      }
    );
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});


app.patch("/shop/Item/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await Item.findByIdAndUpdate(_id,req.body,{
        new:true
      }
    );
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});
// delete

app.delete("/shop/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getWomen=await User.findByIdAndDelete({_id});
      res.send(getWomen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});



app.delete("/shop/Men/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await MenUser.findByIdAndDelete({_id});
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});

app.delete("/shop/Item/:id",async(req,res)=>{
  try{
       const _id=req.params.id;
      const getMen=await Item.findByIdAndDelete({_id});
      res.send(getMen);
  }
  catch(e){
   res.status(400).send(e);
  } 
});

// register
app.post('/register',(req,res)=>{
  Emp.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err));
     
})

// login
app.post("/login",(req,res)=>{
   const {email,password}=req.body;
   Emp.findOne({email:email}).then(user=>{
     if(user){
         if(user.password===password){
             res.json("Success");
         }
         else{
          
          res.json("the password is incorrect");
         }
     }
     else{
      res.json("No record exists");
     }
   })
})

// logout
app.post('/logout', (req, res) => {
  // Assuming you have session-based authentication with express-session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.json({ success: false, message: 'Failed to logout' });
    } else {
      res.json({ success: true, message: 'Logged out successfully' });
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})