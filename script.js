"use_strict";

const submit = document.getElementById("submit-btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Get form input values
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const body = `Hi, I'm ${name}. ${message}`;

  window.open(`mailto:auxi.my001@gmail.com?subject=${subject}&body=${body}`);
});

// Smooth Scrolling
document.querySelector(".main-nav").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");

    if (id.includes("pages/")) {
      // Navigate to another screen
      window.location.href = id;
    } else {
      // Scroll down to selected section
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
});
