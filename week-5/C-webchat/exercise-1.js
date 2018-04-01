/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page.


========
Task 1
========

Your task is to build the webchat frontend. 
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact 
with to get and save messages. Some messages already exist on the server. 

Your first task is to display those messages in the page, 
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/

// Write your code here
// This line of code is for testing function
// const messageList = document.getElementById("message-list");

// This line of code below is working for working function, uncomment it to make it work
// const messageBox = document.getElementById("message-list");

// getMessages();

// uncomment out the setIntervel function below to make this work
// setInterval(getMessages, 2000);

// // This is a testing function
// function getMessages() {
//   fetch("https://codeyourfuture.herokuapp.com/api/messages")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(message) {
//       return (messageList.innerHTML = message
//         .map(function(message) {
//           return `<div>${message.content} ${message.datetime} </div>`;
//         })
//         .join(""));
//     });
// }

// This original function is working. :)
// function getMessages() {
//   fetch("https://codeyourfuture.herokuapp.com/api/messages")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(messages) {
//       messageBox.innerHTML = messages
//         .map(
//           message => `
//         <div>
//         <p>${message.content} </p>
// <p>${message.datetime}</p>
// </div>`
//         )
//         .join(" ");
//     });
// }

// doing exercise with Rukimini

fetch("https://codeyourfuture.herokuapp.com/api/messages")
  .then(function(response) {
    return response.json();
  })
  .then(function(datas) {
    var messageList = document.getElementById("message-list");
    messageList.innerHTML = datas
      .map(function(data) {
        return ` <div> ${data.content}          ${data.datetime} </div>`;
      })
      .join("");
  });
