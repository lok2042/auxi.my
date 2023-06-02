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
