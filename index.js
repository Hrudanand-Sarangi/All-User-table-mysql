const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');
const express= require('express');
const app= express();
const path= require("path");
const { count } = require('console');
const merhodOverride= require('method-override');

app.use(merhodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Your_collage',
    password: 'Beli@1724'
  });

  let getRandomUser= ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

  app.listen("8080" ,()=>{
    console.log("port is listining")
  });

  app.get("/",(req,res)=>{
    let q= `SELECT count(*) FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count =result[0]["count(*)"];
            res.render("home.ejs", {count});
          });
      }catch(err){
        console.log(err);
        res.send("there is some data base error");
      }
      
  });

  app.get("/user",(req,res)=>{
    let q= `SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("userview.ejs", {users});
          });
      }catch(err){
        console.log(err);
        res.send("there is some data base error");
      }
  })

  //edit rout

  app.get("/user/:id/edit", (req,res)=>{
    let {id}= req.params;
    let q= `SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user= result[0];
            res.render("edit.ejs", {user});
          });
      }catch(err){
        console.log(err);
        res.send("there is some data base error");
      }
  });

  //update route

  app.patch("/user/:id",(req,res)=>{
    let {id}= req.params;
    let {password:formpass, Username: newUsername}= req.body;
    let q= `SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user= result[0];
            if(formpass != user.password){
              res.send("Wrong Password");
            }else{
              let q2 = `UPDATE user SET Username='${newUsername}' WHERE id='${id}' `;
              connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");
            });
          }
          });
      }catch(err){
        console.log(err);
        res.send("there is some data base error");
      }
  });


  
  

 

//   console.log(randomUser());