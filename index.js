import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"))

app.get("/", (req,res)=>  {
  res.render("index.ejs");
})

app.get("/about", (req,res)=>  {
    res.render("about.ejs");
})

app.get("/contacts", (req,res)=>  {
    res.render("contacts.ejs");
})
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });