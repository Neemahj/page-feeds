import { useState } from "react";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    author: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setBlog((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e)

  return (
    <form>
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
            name="body"
            value={blog.body}
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
