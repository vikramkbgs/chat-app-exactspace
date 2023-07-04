import React from "react";
import { TiThumbsUp } from "react-icons/ti";
import "./ChatWindow.css";

const getInitials = (name) => {
  const initials = name.split(" ").map((part) => part[0].toUpperCase());
  return initials.join("");
};

const ChatWindow = ({ messages, handleLike }) => {
  return (
    <div className="chat-window">
      <div className="chat-thread">
        {messages.map((msg, index) => (
          <div className="message-block" key={index}>
            <div className="message">
              <div className="avatar-container">
                <span
                  className="avatar"
                  style={{ backgroundColor: userColors[msg.user] }}
                >
                  {getInitials(msg.user)}
                </span>
                <span className="user">{msg.user}</span>
              </div>
              <div className="message-details">
                <div className="message-text">{msg.message}</div>
                <div className="like-section">
                  <span className="timestamp">{msg.timestamp}</span>
                  <button
                    className="like-button"
                    onClick={() => handleLike(index)}
                  >
                    <TiThumbsUp />
                    <span className="like-count">{msg.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//color for avatar
//color for avatar

const userColors = {
  Alan: "#FFAA80", // Light orange
  Bob: "#80FFAA", // Light greenish-blue
  Carol: "#FF80AA", // Light pink
  Dean: "#FFAAAA", // Light salmon
  Elin: "#FFEA80", // Light yellow
};

export default ChatWindow;
