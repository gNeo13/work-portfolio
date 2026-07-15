console.log("script connected");

const form = document.querySelector("form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = document.querySelector("#message").value;

  if (message.trim().length < 10) {
    status.textContent =
      "Please write a bit more - that's too short for us to go on.";
    return;
  }

  status.textContent = "Thanks! Your message has been received.";
  form.reset();
});
