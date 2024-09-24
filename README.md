# Instant Messaging Web App


This web app allows users to chat with friends in real-time after logging in or registering a new account. Below is a guide on how to use the app, along with screenshots to illustrate each step.


# Features
* User Authentication: Log in or register with a username and password.
* Friend Management: Add friends and chat with them instantly.
* Real-Time Messaging: Engage in real-time conversations with your friends.


# How to Use the App


# 1. Login Page
Once the app is running, you'll be directed to the homepage, where you can log in using your username and password.


![Screenshot (86)](https://github.com/user-attachments/assets/be2d22e1-219d-46e4-be0e-bab2f997896d)
If you don’t have an account, click on the "Click here" link to be redirected to the registration page.


![Screenshot (93)](https://github.com/user-attachments/assets/2444d20d-bf83-4c63-b40d-4b4bf2e00b2c)


# 2. Registration Page
On the registration page, fill in your username, email, and password to create a new account


![Screenshot (87)](https://github.com/user-attachments/assets/fadf2c19-af71-402e-a2a5-386f2ffdf52e)
After registration, you'll be redirected to the login page where you can log in with your new credentials.


# 3. Logged-In Dashboard
After successfully logging in, you'll arrive at the main dashboard, where you can manage your friends and start chatting.


![Screenshot (88)](https://github.com/user-attachments/assets/0287e917-d8c2-4242-ad08-d0779cb7ed45)


# 4. Adding Friends
To add friends, click on the add friend icon located next to your username.

![Screenshot (94)](https://github.com/user-attachments/assets/2850bd3b-02cf-482f-a0c0-9b9193a740dc)

Enter your friend’s username in the search bar and hit Enter.

![Screenshot (90)](https://github.com/user-attachments/assets/080fbe3a-b86f-4a42-966e-794d6e08807b)

Once your friend is added, you can begin chatting with them immediately.


# 5. Chatting Interface
After adding a friend, start chatting by selecting their name from your friend list.


![Screenshot (91)](https://github.com/user-attachments/assets/b514ce9f-91a1-4cd9-a430-13b0a6bd0cfb)


![Screenshot (92)](https://github.com/user-attachments/assets/27a1ab85-e9bf-471e-8cd6-c737c039c17b)


# Installation and Running the App
To run the project locally, follow these steps:

1. Ensure MongoDB is running on port 27017, which is the default MongoDB port.
2. Clone the repository and navigate to the project directory.
3. Install the required dependencies by running:
```
npm install

```
4. Start the server by running:
```
npm start

```
Alternatively, use the command:
```

SET NODE_ENV=local && node server.js

```
5. Once the server is running, open your browser and go to:
```
http://localhost:5000

```
You should now be able to use the instant messaging web app.

# Technologies Used
* Node.js for the backend.
* MongoDB for the database.
* HTML/CSS/JavaScript for the front-end.
