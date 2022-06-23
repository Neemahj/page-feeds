import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./Api";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setDisplayBlogs(data.getBlogPost.docs);
      } catch {
        console.log("ERROR");
      }
    };
    getBlog();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(API_URL + "/" + id);
    } catch {
      console.log("Delete Error")
    }
  };

  

  return (
    <div>
      {displayBlogs.map((blogPost) => {
        return (
          <div className="single-blog">
            <p className="blog-author">{"Written By " + blogPost?.author}</p>
            <p className="blog-title">{blogPost?.title}</p>
            <p className="blog-content">{blogPost?.content}</p>

            <div className="del-btn-ctn">
              <button className="delete-btn" onClick={() => handleDelete(blogPost._id)}>
                Delete Post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
