import "./style.css"; 
import Card from "./Card"

function Exercicio8() {

	const jokes = [
		{
			id: 1,
			setup: "What's the best thing about a Boolean?",
			punchline: "Even if you're wrong, you're only off by a bit"
		},

		{
			id: 2,
			setup: "Why do programmers wear glasses?",
			punchline: "Because they need to C#"
		}
	];
	
	return (
		<section>
			<h1 className='title'>Exercício 8</h1>
			<Card array={jokes}/>
		</section>
		);
}

export default Exercicio8;