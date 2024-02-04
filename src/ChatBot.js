import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
//import openai from "openai"; // Import the default export from openai
//import { Configuration, OpenAIApi } from "openai";
import { OpenAI } from 'openai';
import './chatbot.css'
import "react-chat-widget/lib/styles.css";
import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react'
const openaiClient = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

function ChatBot() {
  useEffect(() => {
    addResponseMessage("Welcome to our chat! How can I help you today?");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    try {
      const completion = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo", 
        messages: [{ role: "user", content: newMessage }],
        stream: true,
      });

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
        license="12345678"
        title="ChatBot"
        emoji={true}
        sendButtonAlt={true}
        showCloseButton={true}
        subtitle="Ask me anything"
      />
    </div>
  );
}

export default ChatBot;