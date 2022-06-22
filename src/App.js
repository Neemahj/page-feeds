import './App.css';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import BlogPage from './components/BlogPage';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="new-blog" element={<CreateBlog />} />
      </Routes>
    
    </div>
  );
}

export default App;
