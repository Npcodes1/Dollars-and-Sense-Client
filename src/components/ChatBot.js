import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const ChatBot = () => {
  // OpenAI API Endpoint
  //Create Chat completion
  const Api_Url = "https://api.openai.com/v1/chat/completions";

  // Getting Prompt inputs
  const input = document.querySelector(".chat-input");

  //Submit Button
  const btn = document.querySelector(".btn");

  //Stop Button
  return (
    <section className="chatbot-container">
      <div className="chat-style">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="chat-container">
        <div className="output-container">
          <span className="chat-output"></span>
        </div>

        <div className="input-container">
          <input className="chat-input" />
        </div>
        <div className="btn-container">
          <button className="chat-btn">Submit</button>
          <button className="chat-btn stop-btn">Stop</button>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
