import { Link } from "react-router-dom";
import { Home, Contact } from "../../Pages";

const About = () => {
  return (
    <div>
      <h1>About my page</h1>
      <Link to="/" element={<Home />}>
        Home
      </Link>
      <br />
      <Link to="/contact" element={<Contact />}>
        Contact
      </Link>
    </div>
  );
};

export default About;
