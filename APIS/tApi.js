//create router to handle user api reqs
const exp = require("express");
const teachApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
//import bcryptjs for password hashing
const bcryptjs = require("bcryptjs");
//import jsonwebtoken to create token
const jwt=require("jsonwebtoken")

//to extract body of request object
teachApp.use(exp.json());

//USER API Routes

//create route to user login
teachApp.post(
  "/login",
  expressAsyncHandler(async (request, response) => {
    //get teachCollectionObject
    let teachCollectionObject = request.app.get("teachCollectionObject");
    //get teach credentials obj from client
    let teachCredObj=request.body
    //seacrh for user by username
    let teachOfDB=await teachCollectionObject.findOne({email:teachCredObj.email});
    //if username not existed
    if(teachOfDB==null){
      response.send({message:"Invalid user"})
    }
    //if username existed
    else{
      //compare passwords
      let status=await bcryptjs.compare(teachCredObj.password,teachOfDB.password);
      //if passwords not matched
      if(status==false){
        response.send({message:"Invalid password"})
      }
      //if passwords are matched
      else{
        //create token
        let token=jwt.sign({username:teachOfDB.username},'abcdef',{expiresIn:60})
        //send token
        response.send({message:"success",payload:token,userObj:teachOfDB})
      }
    }
  })
);

//create a route to 'create-user'
teachApp.post(
  "/create-teach",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let teachCollectionObject = request.app.get("teachCollectionObject");
    //get userObj from client
    let newUserObj = request.body;
    //search for user by username
    let teachOfDB = await teachCollectionObject.findOne({
      email: newUserObj.email,
    });
    //if user existed
    if (teachOfDB !== null) {
      response.send({
        message: "email already exists",
      });
    }
    //if user not existed
    else {
      //hash password
      let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
      //replace plain password with hashed password in newUserObj
      newUserObj.password = hashedPassword;
      //insert newUser
      await teachCollectionObject.insertOne({email:newUserObj.email,password:newUserObj.password});
      //send response
      response.send({ message: "New User created" });
    }
  })
);

module.exports = teachApp;