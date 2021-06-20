import { useState } from "react";
import { useForm } from "react-hook-form";
import SmoothCollapse from "react-smooth-collapse";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import img4 from "../../imgs/img4.png";

import { askedQuestions } from "../../configs/questions";

type FormTypes = {
   email: string;
};

const Content = () => {
   const [questinsData, setQuestionsData] = useState(askedQuestions);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormTypes>();

   const onSubmit = (value: FormTypes) => {
      console.log(value);
   };

   const handleVisibility = (clickedQuestion: any) => {
      const updatedValue = askedQuestions.map((questions: any) => {
         if (questions.id === clickedQuestion.id) {
            return {
               ...questions,
               visible: !clickedQuestion.visible,
            };
         }
         return questions;
      });
      setQuestionsData(updatedValue);
   };

   return (
      <section className="Content">
         <div className="border"></div>
         <div className="upper-content">
            <div className="upper-content-inner">
               <div className="upper-content-text">
                  <h1>Enjoy on your TV</h1>
                  <p>
                     Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                     TV, Blu-ray players, and more.
                  </p>
               </div>

               <div className="img-wrapper">
                  <img src={img1} alt="testing " />
               </div>
            </div>
         </div>
         <div className="border"></div>

         <div className="mid-content">
            <div className="upper-content-inner">
               <div className="img-wrapper">
                  <img src={img2} alt="testing " />
               </div>
               <div className="upper-content-text">
                  <h1>Download your shows to watch offline.</h1>
                  <p>
                     Save your favorites easily and always have something to
                     watch.
                  </p>
               </div>
            </div>
         </div>

         <div className="border"></div>

         <div className="mid-content">
            <div className="upper-content-inner">
               <div className="upper-content-text">
                  <h1>Watch everywhere.</h1>
                  <p>
                     Stream unlimited movies and TV shows on your phone, tablet,
                     laptop, and TV without paying more.
                  </p>
               </div>
               <div className="img-wrapper">
                  <img src={img3} alt="testing " />
               </div>
            </div>
         </div>

         <div className="border"></div>

         <div className="mid-content">
            <div className="upper-content-inner">
               <div className="img-wrapper">
                  <img src={img4} alt="testing " />
               </div>
               <div className="upper-content-text">
                  <h1>Create profiles for kids.</h1>
                  <p>
                     Send kids on adventures with their favorite characters in a
                     space made just for them—free with your membership.
                  </p>
               </div>
            </div>
         </div>
         <div className="border"></div>

         <div className="asked-questions">
            <h1>Frequently Asked Questions</h1>
            {questinsData.map((questions: any) => (
               <div key={questions.id} className="dropdown-question-answer">
                  <button onClick={() => handleVisibility(questions)}>
                     <span>{questions.question}</span>
                     {questions.visible ? (
                        <AiOutlineClose />
                     ) : (
                        <AiOutlinePlus />
                     )}
                  </button>
                  <SmoothCollapse expanded={questions.visible}>
                     <div className="answer">
                        {questions.answers.map((answer: string, i: number) => (
                           <p key={i}>{answer}</p>
                        ))}
                     </div>
                  </SmoothCollapse>
               </div>
            ))}
         </div>
         <div className="signup">
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
         <div className="border"></div>
      </section>
   );
};

export default Content;
