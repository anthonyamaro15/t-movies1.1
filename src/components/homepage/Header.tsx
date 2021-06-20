import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";

type FormTypes = {
   email: string;
};
const Header = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormTypes>();

   const onSubmit = (value: FormTypes) => {
      console.log(value);
   };
   return (
      <div className="Header">
         <div className="Header-inner-wrapper">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p className="watch-anywhere">Watch anywhere. Cancel anytime.</p>
            <p>
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            <form className="get-started" onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="email">
                  <input
                     placeholder="Email address"
                     {...register("email", { required: true })}
                  />
                  {errors.email && (
                     <span className="error-message">Email is required!</span>
                  )}
               </label>
               <div className="btn-wrapper">
                  <button>
                     get started
                     <span>
                        <IoIosArrowForward />
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Header;
