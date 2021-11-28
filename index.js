import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { insertBlogData } from "./supabaseSQL.js";
dotenv.config();
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const port = process.env.SERVER_PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabase = createClient(supabaseUrl, supabaseAnonKey);
// console.log(supabase);

// let { data, error } = await supabase.from("blogs").select();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.engine("html");

app.listen(port, () => {
  console.log(`server started on host: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render(__dirname + "index.html");
});

app.post("/post/blogs", async (req, res) => {
  const { blogName, author, likes } = req.body;
  //   console.log(blogName, author, likes);
  let { data, error } = await supabase.from("blogs").insert({
    blog_name: blogName,
    author: author,
    likes: likes,
  });
  if (error !== null) {
    res.status(500);
  } else {
    res.status(200);
  }
  res.redirect("/");
});

app.post("/get/blogs", async (req, res) => {
  const { getBlogName: blogName, getAuthor: author } = req.body;
  if (blogName !== null) {
    var { data: blogData, error: blogError } = await supabase
      .from("blogs")
      .select("*")
      .ilike("blog_name", `%${blogName}%`);
  }
  if (author !== null) {
    var { data: AuthorData, error: AuthorError } = await supabase
      .from("blogs")
      .select("*")
      .ilike("author", `%${author}%`);
  }
  if (blogError | AuthorError) {
    res.status(500);
    res.send("No data found for this input 😟");
  }
  res.status(200);
  res.send([...blogData, AuthorData]);
});
