const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Status: klik radi i projekt je spreman za tvoj sljedeci commit.";
  });
}
