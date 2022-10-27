import { Link } from "react-router-dom";
import { Home, About } from "../../Pages";

const Contact = () => {
  return (
    <div>
      <h1>Contact with me !</h1>
      <Link to="/" element={<Home />}>
        Home
      </Link>
      <br />
      <Link to="/about" element={<About />}>
        About
      </Link>
    </div>
  );
};

export default Contact;
