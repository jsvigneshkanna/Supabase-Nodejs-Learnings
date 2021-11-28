import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

// Getting the supabase credentials from env file
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Initialising the supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// function to insert data to blogs table

export const insertBlogData = async (blogName, author, likes) => {
  let { data, error } = await supabase.from("blogs").insert({
    blog_name: blogName,
    author: author,
    likes: likes,
  });
  console.log("in supabase", data, error);
  return data, error;
};
