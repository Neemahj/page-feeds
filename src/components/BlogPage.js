import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./Api";
import { FaRegEdit } from "react-icons/fa";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const getBlog = async (page) => {
    try {
      let url;
      if ((page != null) && (page > 1)) {
        url = `${API_URL}?page=${page}`;
      } else {
        url = API_URL;
      }
      const { data } = await axios.get(url);
      setDisplayBlogs(data.getBlogPost.docs);
    } catch (error) {
      console.log(error);
    }
  };
  

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadBlogs(page);
      }
    }
  }

  useEffect(() => {
      loadBlogs(page);
  },[]);

  const loadBlogs = (page) => {
    setLoading(true);
    setTimeout(() => {
      getBlog(page)
          setDisplayBlogs((previousPost)=> [...previousPost, ...displayBlogs])
          const newPage = page + 1;
          setPage(newPage);    
          if(!(displayBlogs)){
            setNoData(true); 
          }     
      }
    ,1500);
  }

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

      <div  className="loading-text">
         {loading ? <div className="text-center">Loading data ...</div> : ""}
         {noData ? <div className="text-center">End of Data ...</div> : ""}
      </div>
      
    </div>
  );
};

export default BlogPage;
