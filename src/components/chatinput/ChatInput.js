import React, { useState } from "react";
import "./ChatInput.css";

const ChatInput = ({ onSendMessage, user_list }) => {
  const [message, setMessage] = useState("");
  const [showUserList, setShowUserList] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const handleMentionSelect = (user) => {
    setMessage((prevMessage) => prevMessage + `@${user} `);
    setShowUserList(false);
  };

  const handleShowUserList = () => {
    setShowUserList(!showUserList);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown} 
      />
      <button className="mention-button" onClick={handleShowUserList}>
        @
      </button>
      <div className="emoji-options">
        <span onClick={() => handleEmojiSelect("😀")}>😀</span>
        <span onClick={() => handleEmojiSelect("😊")}>😊</span>
        <span onClick={() => handleEmojiSelect("👍")}>👍</span>
      </div>
      <button onClick={() => handleSendMessage()}>Send</button>
      {showUserList && (
        <div className="user-list">
          {user_list.map((user) => (
            <span key={user} onClick={() => handleMentionSelect(user)}>
              @{user}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatInput;
