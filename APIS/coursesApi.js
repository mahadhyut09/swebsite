//create router to handle user api reqs
const exp = require("express");
const coursesApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const { MongoClient } = require("mongodb");

//to extract body of request object
coursesApp.use(exp.json());

//USER API Routes

//create route to handle '/courses' path
coursesApp.get(
  "/courses",
  expressAsyncHandler(async (request, response) => {
    //get coursesCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get all courses
    let courses = await coursesCollectionObject.find().toArray();
    //send res
    response.send({ message: "courses list", payload: courses });
  })
);

//create a route to 'post course'
coursesApp.post(
  "/postcourse",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get userObj from client
    let newCourseObj = request.body;
    await coursesCollectionObject.insertOne(newCourseObj);
    //send response
    response.send({ message: "Created" });
    })
);

coursesApp.post(
  "/storedata",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get userObj from client
    let newCourseObj = request.body;
    await coursesCollectionObject.insertOne(newCourseObj);

    //send response
    response.send({ message: "Created" });
    })
);

coursesApp.get(
  "/getdata/:id",
  expressAsyncHandler(async (request, response) => {
    //get coursesCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    let id = request.params.id
    console.log(request)
    //get all courses
    let courses = await coursesCollectionObject.findOne({name : id});
    //send res
    response.send({ message: "courses list", payload: courses  });
  })
);


//export coursesApp
module.exports = coursesApp;