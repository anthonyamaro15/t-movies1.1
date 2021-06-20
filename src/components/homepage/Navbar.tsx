import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="Navbar">
         <nav>
            <span>netflix</span>
            <div className="nav-links">
               <Link to="/language">English</Link>
               <Link to="/signin">sign in</Link>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
