import React from "react";
import ChatApp from "./components/chatapp/ChatApp";

const style = {
  Top: "40px",
};

function App() {
  return (
    <div style={{ marginTop: style.Top }}>
      <ChatApp />
    </div>
  );
}

export default App;
