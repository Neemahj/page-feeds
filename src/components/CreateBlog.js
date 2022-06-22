import { useState } from "react";
import axios from "axios";
import { API_URL } from "./Api";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    author: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await axios.post(API_URL, blog)  
    }catch {
      console.log("Error")
    }
    setBlog({
      author: "",
      title: "",
      content: "",
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="field">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="content-field">
        <label>
          Body:
          <textarea
            col="30"
            rows="10"
            type="text"
            name="content"
            value={blog.content}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="btn-container">
        <button className="create-btn">Create Blog</button>
      </div>
    </form>
  );
};

export default CreateBlog;
