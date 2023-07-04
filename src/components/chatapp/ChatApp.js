import React, { useState } from "react";
import ChatWindow from "../chatwindow/ChatWindow";
import ChatInput from "../chatinput/ChatInput";
import "./ChatApp.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const ChatApp = () => {
  
  const [messages, setMessages] = useState([]);
  const [lastUser, setLastUser] = useState(null);

  const getRandomUser = () => {
    let randomIndex = Math.floor(Math.random() * user_list.length);
    let randomUser = user_list[randomIndex];

    // Ensure the new random user is different from the last selected user
    while (randomUser === lastUser) {
      randomIndex = Math.floor(Math.random() * user_list.length);
      randomUser = user_list[randomIndex];
    }

    setLastUser(randomUser);
    return randomUser;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = (message) => {
    const randomUser = getRandomUser();
    const newMessage = {
      user: randomUser,
      message: message,
      likes: 0,
      timestamp: getCurrentTime(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleLike = (index) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  return (
    <div className="chat-app ">
      <div className="scroll">
        <ChatWindow messages={messages} handleLike={handleLike} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} user_list={user_list} />
    </div>
  );
};

export default ChatApp;
