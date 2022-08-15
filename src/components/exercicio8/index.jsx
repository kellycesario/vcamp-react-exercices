import "./style.css";

const jokes = [
  {
    id: 1,
    joke: "What is the best part about a boolean?",
    punchline: "Even if you're wrong, only off a bit.",
  },
  {
    id: 2,
    joke: "Why do programmers wear glasses?",
    punchline: "Because they need to c#",
  },
];

const joke = jokes.map(function (element) {
  return `${element.joke}`;
});

const punchline = jokes.map(function (element) {
  return `${element.punchline}`;
});

function Exercicio8() {
  return (
    <section className="jokes">
      <div className="jokesContainer">
        <p className="jokesQuestion">{joke[0]}</p>
        <p className="jokesPunchline">{punchline[0]}</p>
      </div>

      <div className="jokesContainer">
        <p className="jokesQuestion">{joke[1]}</p>
        <p className="jokesPunchline">{punchline[1]}</p>
      </div>
    </section>
  );
}

export default Exercicio8;
