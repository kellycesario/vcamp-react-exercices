import "./style.css"; 

function Exercicio5() {
	const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
	const newList = animals.map((listAnimals) => 
	<li>{listAnimals}</li>
	);
	
	return (
		<section className="container">
			<h1 className='title'>Exercício 5</h1>
			<ul>{newList}</ul>
		</section>
);
}

export default Exercicio5;