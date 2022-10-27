import "./index.css";
import { Link } from "react-router-dom";
import { Home, About, Contact, Logout, Book, Admin } from "../../Pages";
import pic from "../images/zing.JPG";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <h1 className="bg-h1">
          <span className="text-1">Z</span>
          <span className="text-2">I</span>
          <span className="text-3">N</span>
          <span className="text-4">G </span>
          <span className="text-5">NEW</span>
        </h1>
    <Link className="book" to="/">HOME </Link>
      
    
    

    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      




        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/book" element={<Book />}>
              <span className="book">BOOK</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<About />}>
              <span>Thế giới</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Kinh doanh</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Công Nghệ</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Sức khỏe</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Thể thao</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Giải trí</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Đời sống</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Du lịch</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Lifestyle</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" style={{ fontSize: "2rem", margin: "-20px" }}>
              ...
            </Link>
          </li> */}
        </ul>




      </div>
      <h3 className="logout-css">
        <Link className="nav-link" to="/admin" element={<Admin />}>
         ADMIN
        </Link>
        <Link className="nav-link" to="/logout" element={<Logout />}>
          <span className="btn-logout">Logout</span>
        </Link>
      </h3>
    </nav>
  );
};

export default Header;
