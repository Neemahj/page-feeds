import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./Api";
import { FaRegEdit } from "react-icons/fa";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);


  useEffect(() => {
    const getBlog = async () => {
      try{
        const {data} = await axios.get(`${API_URL}?page=${page}`);
        setMaxPage(data.getBlogPost.pages)
        setDisplayBlogs((previousPost)=> [...previousPost, ...data.getBlogPost.docs]);
    
      }catch (error){
        console.log(error)
      }
    };
    getBlog()
  }, [page])
  
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1)
      }
    };

  const handleDelete = async (id) => {
    try {
      await axios.delete(API_URL + "/" + id);
    } catch {
      console.log("Delete Error");
    }
  };

  return (
    <div>
      {displayBlogs.map((blogPost) => {
        return (
          <div className="single-blog" key={blogPost.id}>
            <p className="blog-author">{"Written By " + blogPost?.author}</p>
            <p className="blog-title">{blogPost?.title}</p>
            <p className="blog-content">{blogPost?.content}</p>

            <div className="btn-ctn">
              <FaRegEdit
                className="edit-icon"
                style={{ fontSize: 50 }}
                value="Delete"
              />
              <button
                className="delete-btn"
                onClick={() => handleDelete(blogPost._id)}
              >
                Delete Post
              </button>
            </div>
          </div>
        );
      })}

      <div className="loading-text">
        <div className="text-center">{ page > maxPage ? 'End of Data' :'Loading Data'}</div>
      </div>
      
    </div>
  );
};

export default BlogPage;
