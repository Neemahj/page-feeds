import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>The Writing Room</h1>
      <Link to="/" className="nav-items">Home</Link>
      <Link to="new-blog" className="nav-items">New Blog</Link>
    </header>
  )
}

export default Header
