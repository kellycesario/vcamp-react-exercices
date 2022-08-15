import Animals from "../exercicio6/Animals";
import "./style.css";

function Exercicio5() {
  return (
    <section className="container">
      <h1 className="title">Exercício 6</h1>
      <section className="list__area">
        <Animals title="Dog"> 🐶 </Animals>
        <Animals title="Cat"> 🐱 </Animals>
        <Animals title="Chicken"> 🐔 </Animals>
        <Animals title="Cow"> 🐮 </Animals>
        <Animals title="Sheep"> 🐑 </Animals>
        <Animals title="Horse"> 🐴 </Animals>
      </section>
    </section>
  );
}

export default Exercicio5;
