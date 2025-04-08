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
        const users = await User.find();
        res.json(users);

});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000");
});
