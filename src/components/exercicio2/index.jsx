import "./style.css";

function Exercicio2() {
	
	function clickMe() {
		alert('Clicked!');
	}
	
	return (
	<section>
		<h1 className='title'>Exercício 2</h1>
		<section className="button__section">
			<button onClick={clickMe} className="button"> Click Me</button>
		</section>
	</section>
	)
}

export default Exercicio2