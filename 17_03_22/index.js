const movies = [
    "Deadpool",
    "Dune",
    "Big Trouble in Little China",
    "V for vendetta",
    "Pulp Fiction",
    "The Lord of The Rings",
    "Scarface",
    "Sharknado",
    "Blade Runner",
    "Kill Bill",
  ];
console.log(movies);

const ul = document.querySelector("#movieList");
const button = document.querySelector("#submit");

const render =() => {
    ul.innerHTML = movies.map((movie) => `<li>${movie}</li>`).join("");
}
render();

submit.addEventListener('click', () => {
    const input = document.querySelector("#input").value;
    const movieSearch = movies.filter((movie) => movie.toLowerCase().includes(input.toLowerCase()));
    ul.innerHTML = movieSearch.map((movie) => `<li>${movie}</li>`).join("");
});
