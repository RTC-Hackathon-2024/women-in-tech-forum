import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
//import openai from "openai"; // Import the default export from openai
//import { Configuration, OpenAIApi } from "openai";
import { OpenAI } from 'openai';

import "react-chat-widget/lib/styles.css";

const openaiClient = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

function ChatBot() {
  useEffect(() => {
    // When the component mounts, display a welcome message
    addResponseMessage("Welcome to our chat! How can I help you today?");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    try {
      // Initialize OpenAI with your API key from the environment variable
      //const openaiClient = await openai.OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

      // Send a request to the OpenAI API and wait for a response
      const completion = await openaiClient.createCompletion({
        model: "gpt-3.5-turbo", // Or whichever model you're using
        messages: [{ role: "user", content: newMessage }],
      });

      // Add the API response as a new message in the chat
      addResponseMessage(completion.data.choices[0].message.content);
    } catch (error) {
      console.error("Error responding to message: ", error);
      addResponseMessage("Sorry, I couldn't fetch a response. Please try again.");
    }
  };

  return (
    <div className="ChatBot">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="ChatBot"
        subtitle="Ask me anything"
      />
    </div>
  );
}

export default ChatBot;
