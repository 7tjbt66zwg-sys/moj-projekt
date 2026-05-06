const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");

const ideas = [
  "Landing page headline tightened to make the offer feel more immediate and specific.",
  "Retargeting creative reframed around trust, proof, and lower-friction objections.",
  "Top-of-funnel hook shifted from broad awareness into direct customer pain points.",
  "CTA path simplified so the page asks for one next action instead of three."
];

if (button && message) {
  let index = 0;

  button.addEventListener("click", () => {
    index = (index + 1) % ideas.length;
    message.textContent = ideas[index];
  });
}
