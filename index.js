import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';


const app = express();
const port = 3000;
const API_URL = 'https://wallhaven.cc/api/v1/search';

const params = {
  q: 'forest',
  sorting: 'random',
  purity: '100', 
  categories: '100',
  page: '1', 
  order: 'desc'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))

app.get("/", (req,res)=>  {
  res.render("index.ejs", { imageUrl: null });
})

app.get("/about", (req,res)=>  {
    res.render("about.ejs");
})

app.get("/contacts", (req,res)=>  {
    res.render("contacts.ejs");
})

app.post("/forest-wallpaper", async (req, res) => {
  try {
    const { data } = await axios.get(API_URL, { params });
    const imageUrl=data.data[0].path
    res.render("index.ejs", { imageUrl });
  } catch (error) {
    console.error('Error fetching random forest wallpaper data:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });