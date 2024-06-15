// import React, { useState } from "react";
// import "../Quiz.css"
// import "../Pages.css";
// import "../MediaQueries.css";

// function Quiz() {
//   //To keep score. Initial score is 0.
//   const [score, setScore] = useState(0);

//   //track the user's answers
//   const handleChosenAnswers = (e) => {
//     const inputAnswers = document.querySelectorAll(".answer");
//     //selects all 6 radio inputs
//     console.log(inputAnswers, inputAnswers.length);

//     //To score each answer. Yes => +1 and No => +0
//     const calculateAnswers = function () {
//       //reset score for each input selected so it's not adding on to the previous one.
//       score = 0;
//       //for loop to score input that user selects based on if it's yes or no
//       for (let i = 0; i < inputAnswers.length; i++) {
//         if (inputAnswers[i].checked && inputAnswers[i].value === "yes") {
//           console.log(inputAnswers[i].value);
//           score += 1;
//         } else if (inputAnswers[i].checked && inputAnswers[i].value === "no") {
//           console.log(inputAnswers[i].value);
//           //   score;
//         }
//       }
//       console.log(`The final score is ${score}.`);
//     };

//     //for each loop to add event listener to selected input choice
//     inputAnswers.map((inputAnswers) => {
//       inputAnswers.addEventListener("click", calculateAnswers);
//     });

//     // To submit for results
//     const handleGetFinalResult = (e) => {
//       e.preventDefault(); //prevent refreshing of page
//       let message = document.querySelector("#quiz-results");
//       console.log(message); //check it's getting the result
//       if (score >= 2) {
//         message.textContent = "This is exactly where you need to be! Welcome!";
//       } else if (0 <= score < 2) {
//         message.textContent =
//           "Sorry, this website will not benefit you. But feel free to look around anyways!";
//       } else {
//         console.warn("Quiz is not working!");
//       }
//     };
//   };
//   const submitBtn = document.querySelector(".btn");

//   // submitBtn.addEventListener("click", getFinalResult);

//   //To clear quiz

//   const handleClear = () => {
//     setScore(0); //set it back to 0
//   };
//   const clearBtn = document.querySelector(".clear-btn");

//   const resetBtn = function () {
//     score = 0;
//     console.log("The score has been reset.");
//     document.querySelector(".form").reset(); //to clear form
//     document.querySelector("#quiz-results").textContent = ""; //clear decision from page
//   };

//   clearBtn.addEventListener("click", resetBtn);

//   return (
//     <>
//       <form className="form" onSubmit={handleQuiz}>
//         <div className="form-questions-wrapper">
//           <ol>
//             <li>
//               Are you a minority that wants to buy a house someday?
//               <div className="quiz-content">
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question1"
//                   value="yes"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>Yes</label>
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question1"
//                   value="no"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>No</label>
//               </div>
//             </li>
//             <li>
//               Can you currently afford to buy a house?
//               <div className="quiz-content">
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question2"
//                   value="yes"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>Yes</label>
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question2"
//                   value="no"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>No</label>
//               </div>
//             </li>
//             <li>
//               Are you struggling with budgeting and saving?
//               <div className="quiz-content">
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question3"
//                   value="yes"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>Yes</label>
//                 <input
//                   type="radio"
//                   className="answer"
//                   name="question3"
//                   value="no"
//                   onChange={handleChosenAnswers}
//                   required
//                 />
//                 <label>No</label>
//               </div>
//             </li>
//           </ol>
//           {/* Submit Button */}
//           <div className="form-submit-quiz">
//             <button className="form-btn btn" type="submit">
//               Submit
//             </button>
//             <button className="form-btn clear-btn btn" type="submit">
//               Clear
//             </button>
//           </div>
//           <p id="quiz-results"></p>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Quiz;
