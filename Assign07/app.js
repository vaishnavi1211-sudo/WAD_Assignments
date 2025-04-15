const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://vghuge1216:ghuge1216@cluster1.4qpkw.mongodb.net/Mongo")


// Create User Schema
const userSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    branch: String
});

// Create User Model
const User = mongoose.model("User", userSchema);

app.get("/", () =>{
    console.log("hello");
})

// GET route to view all users (in JSON)
app.get("/users", async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(400).json({ message: err.message });  
        }

});

//POST 
app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body); // assuming req.body has the user data
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // 201 Created
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//DELETE
app.delete("/delete-users/:name", async (req, res) => {
    const { name } = req.params;
    try{
        const user = await User.findOneAndDelete({name})
        res.send(user);
    }
    catch(error){
        res.status(500).send("Error deleting user");
    }

});

//UPDATE
app.put("/update/:name", async (req, res) => {
    try {
      const updated = await User.findOneAndUpdate(   // change methos when we update for the many documeny findByIdAndDelete
        //  {name: req.params.name},   for updating one document

        req.params.name,  // for updating many document 
        {
          branch: req.body.branch   // here we can add more updating which we have to update
        },
        {
          new: true,
          upsert: true
        }
      );
      res.send(updated ? updated : "User not found");
    } catch (error) {
      res.status(500).send("Error updating user: " + error.message);
    }
  });
  
  


// Start the server
app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000");
});
