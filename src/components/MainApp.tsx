import { Route } from "react-router-dom";
import HomePage from "./homepage/Homepage";
import Signin from "./auth/Signin";

const MainApp = () => {
   return (
      <div>
         <Route exact path="/">
            <HomePage />
         </Route>
         <Route exact path="/signin">
            <Signin />
         </Route>
      </div>
   );
};

export default MainApp;
