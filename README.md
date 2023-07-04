# Chat App

The Chat App is a simple React-based application that allows users to send and receive messages in a chat-like interface.

## Live 
[click me](https://iridescent-pie-bab996.netlify.app/)

## Features

- Real-time Messaging: Enables users to exchange messages in real-time, providing a seamless chat experience.
- User Mentions: Users can mention other users in their messages using the '@' symbol followed by the username.
- Emoji Support: Users can include emojis in their messages to express emotions or reactions.
- Message Likes: Messages can be liked by other users, and the number of likes is displayed.
- Avatar Display: Each user's avatar is displayed next to their messages for easy identification.
- Timestamps: Messages are accompanied by timestamps to indicate when they were sent.

## Installation

To run the Chat App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/chat-app.git`
2. Navigate to the project directory: `cd chat-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and go to: `http://localhost:3000`

## Folder Structure

The folder structure of the project is as follows:
```
chat-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── chatinput/
│   │   │   ├── ChatInput.js
│   │   │   └── ChatInput.css
│   │   ├── chatwindow/
│   │   │   ├── ChatWindow.js
│   │   │   └── ChatWindow.css
│   │   ├── chatapp/
│   │   │   ├── ChatApp.js
│   │   │   └── ChatApp.css
│   │   └── ... (other components)
│   ├── App.js
│   ├── index.js
│   └── ... (other source files)
├── .gitignore
├── package.json
└── README.md
```


## Technologies Used

- React: The frontend framework used for building the user interface and handling user interactions.
- HTML: The markup language used for creating the structure of the web pages.
- CSS: The styling language used to enhance the visual appearance of the application.
- React Icons: A library for including icons in the React components.

## Contributing

Contributions are welcome! If you want to contribute to the project, please fork the repository and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
