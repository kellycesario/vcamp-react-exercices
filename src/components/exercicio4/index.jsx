import React, { useState } from "react";
import "./style.css";

function Exercicio4() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1 className="title">Exercício 4</h1>
      <section className="contador__area">
        <p className="contador__titulo">
          Button has been clicked: {count} times
        </p>
        <button onClick={() => setCount(count + 1)}> Click Me </button>
      </section>
    </section>
  );
}

export default Exercicio4;
