//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');
const cors=require('cors')
app.use(cors())

const coursesApp=require("./APIS/coursesApi");
const userApp = require('./APIS/userApi')
const teachApp = require('./APIS/tApi')
// const productApp = require('./APIS/productApi')
//connect build with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

//DB connection URL
const DBurl="mongodb+srv://mahadhyut:mahadhyut@mahadhyut.ypziejz.mongodb.net/?retryWrites=true&w=majority"

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("SchoolWebsite");

  //create collection objects
  let coursesCollectionObject=dbObj.collection("courses");
  let userCollectionObject = dbObj.collection("usercollection")
  let productCollectionObject = dbObj.collection("productcollection")
  let teachCollectionObject = dbObj.collection("teachcollection")

  //sharing collection objects to APIs
  app.set("coursesCollectionObject",coursesCollectionObject);
  app.set("userCollectionObject", userCollectionObject);
  app.set("productCollectionObject", productCollectionObject);
  app.set("teachCollectionObject", teachCollectionObject);

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))

//import userApp and studentApp


//excute specific middleware based on path
app.use("/courses-api", coursesApp);
app.use("/user-api", userApp);
app.use("/teach-api", teachApp);

//dealing with page refresh
app.use('*', (request, response)=>{
  response.sendFile(path.join(__dirname, './build/index.html'));
})

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
app.listen(3000, () => console.log("server listening on port 3000.."));
