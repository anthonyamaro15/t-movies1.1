import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";

type FormTypes = {
   email: string;
   password: string;
};

const Signin = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormTypes>();

   const onSubmit = (value: FormTypes) => {
      console.log(value);
   };
   return (
      <div className="Signin">
         <h1 className="logo">Netflix</h1>
         <div className="form-wrapper">
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="email">
                  <input
                     type="text"
                     {...register("email", { required: true })}
                     placeholder="Email"
                  />
                  {errors.email && (
                     <span className="error-message-email">
                        Please enter a valid email or phone number.
                     </span>
                  )}
               </label>
               <label htmlFor="Password">
                  <input
                     type="text"
                     {...register("password", { required: true })}
                     placeholder="password"
                  />
                  {errors.password && (
                     <span className="error-message-pass">
                        Your password must contain between 4 and 60 characters.
                     </span>
                  )}
               </label>

               <div className="btn-wrapper">
                  <button>Sign In</button>
               </div>
            </form>
            <div className="remember-me">
               <label htmlFor="rememberme">
                  <input type="checkbox" />
                  <span>Remember me</span>
               </label>

               <a href="www.google.com">Need help?</a>
            </div>

            <div className="facebook-auth">
               <span className="icon">
                  <AiFillFacebook />
               </span>
               <span>Login with Facebook</span>
            </div>
            <div className="signup">
               <p>
                  New to Netflix? <Link to="/">Sign up now.</Link>
               </p>
            </div>
            <div className="terms">
               <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <Link to="/">Learn more.</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Signin;
