// Quotes Generator

const quotes = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
];
const div = document.querySelector("#quoteDisplay");
  document.querySelector("button").addEventListener("click", () =>{
  const randomNumber = Math.floor(Math.random() * quotes.length);
  div.innerHTML = (quotes[randomNumber]);
});

// Comments Section

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];

const renderComments = () => {
  commentsList.innerHTML = comments
    .map(
      (comment) => `<li>
        <h4>Anonymous User</h4>
        <p>${comment}</p>
      </li>`
    )
    .join("");
};

submit.addEventListener("click", () => {
  comments.push(input.value);
  input.value = "";
  renderComments();
});

renderComments();