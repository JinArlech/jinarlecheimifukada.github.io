// Function to show the login box
document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginBox").style.display = "flex"; // Use "block" or "flex" depending on your layout
});

// Function to handle form submission
document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  // Simulate checking credentials
  var username = document.getElementsByName("username")[0].value;
  var password = document.getElementsByName("password")[0].value;
  
  if (username === "admin" && password === "admin") {
    // Redirect to the dashboard page
    window.location.href = "../admin/dashboard.html"; // Ensure this path matches your dashboard page's location
  } else {
    alert("Invalid credentials!");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const messageForm = document.querySelector(".message-form");
  const messageInput = messageForm.querySelector("input");
  const messagesArea = document.querySelector(".messages");

  // Simulate sending a message
  messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText) {
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.textContent = `You: ${messageText}`;
      messagesArea.appendChild(newMessage);
      messageInput.value = ''; // Clear input field after sending
      messagesArea.scrollTop = messagesArea.scrollHeight; // Scroll to the bottom
    }
  });
});


// Function to toggle password visibility
function togglePasswordVisibility() {
  var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}