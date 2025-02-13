const jokeShow = document.querySelector("#joke");
const updateBtn = document.querySelector("#btn");
const api_url = "https://official-joke-api.appspot.com/random_ten";

updateBtn.addEventListener("click", () => {
  apiData();
});

const apiData = async () => {
  try {
    jokeShow.textContent = `Loading....`;
    const data = await fetch(api_url);
    const response = await data.json();
    console.log("Getting data", response);
    const joke = response[0];
    console.log(joke);
    jokeShow.textContent = ``;
    jokeShow.textContent = joke ? `${joke?.punchline}` : "No Joke Found!";
  } catch (error) {
    console.log("Error", error);
    jokeShow.textContent = `API got failed`;
  }
};
