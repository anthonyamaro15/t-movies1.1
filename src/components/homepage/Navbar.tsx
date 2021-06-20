import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="Navbar">
         <nav>
            <span>netflix</span>
            <div className="nav-links">
               <form>
                  <label htmlFor="language">
                     <select name="language" id="language">
                        <option value="english">English</option>
                        <option value="spanish">spanish</option>
                     </select>
                  </label>
               </form>
               <Link to="/signin">sign in</Link>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
