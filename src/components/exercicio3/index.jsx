import "./style.css";
import OnClickButton from "../exercicio3/Button";
import { render } from "react-dom";

function Exercicio3() {
  return (
    <section>
      <h1 className="title">Exercício 3</h1>
      <section className="button__section">
        <OnClickButton className="first__button">Button 1</OnClickButton>
        <OnClickButton className="second__button">Button 2</OnClickButton>
        <OnClickButton className="third__button">Button 3</OnClickButton>
      </section>
    </section>
  );
}

export default Exercicio3;
