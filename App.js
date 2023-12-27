const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const User = require("./Model/user");
const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(console.log("DB Connected"))
const PORT = process.env.PORT || 4000;

// Create and save user
async function start() {
 
   const person = await User.create({
     name: "Amal",
     age: 25,
     favoriteFoods: ["Sushi"],
   })
  
 }


start();

//Create more Users
async function start() {
 
 const arrayOfusers =[
  {name: "Chadi", age: 20, favoriteFoods: ["koskous"]},
 {name: "Nadhem", age: 27, favoriteFoods: ["Pasta "," Kabeb"]},
  {name: "Chaima", age: 31, favoriteFoods: ["Mlokhiya","Hargma","juice"],},
 ]
 await User.create(arrayOfusers)
 }
 start();

// find users 
 async function start() {
console.log(await User.find()
);
 }
 start () ;
 //find one user
 async function start() {
  console.log(await User.findOne({name:"Nadhem"})
  );
   }
   start () ;
   //find by id
   async function start() {
    console.log(await User.findById("658c30e25dbf7a419615281a")
    );
     }
     start () ;
     
     //find by id and update
   async function start() {
    console.log(await User.findByIdAndUpdate("658c306e9ca5c8920b0a5037")
    );
     }
     start () ;
      //find  and update
   async function start() {
    console.log(await User.findOneAndUpdate({name:"chadi"},{favoriteFoods:"Pizza"})
    );
     }
     start () ;

      //find by id and delete
   async function start() {
    console.log(await User.findByIdAndDelete("658c30e25dbf7a419615281a")
    );
     }
     start ();
//specific search

async function start() {
 const specificSearch = await User.find({favoriteFoods:"Pasta"}).sort({age:-1,}).limit(1).select("name");
 console.log(specificSearch);
  }
  start ();






app.listen(PORT, () => {
console.log(`server is running on ${PORT}`);
});



