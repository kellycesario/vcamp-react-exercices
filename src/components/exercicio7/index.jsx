import React, { useState } from "react";
import InputField from "./InputField"
import "./style.css"; 

const Exercicio7 = () =>  {	

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	
	const handleSubmit = (event) => {
		event.preventDefault();	  
		alert(`Hello, ${firstName} ${lastName}!`);
	}
	
	const handlerOnChange = (e) => {
		setFirstName(e.target.value)
	}

	const handlerOnChangeLastName = (e) => {
		setLastName(e.target.value)
	}

	return (
		<section>
			<h1 className='title'>Exercício 7</h1>
			<form className="form__area" onSubmit={handleSubmit}>
				<InputField value1={firstName} className="input__firstname" pattern="[A-Za-z]{2,50}" placeholder="First name" onChange={handlerOnChange}/>
				<InputField value1={lastName} className="input__secondname" pattern="[A-Za-z]{2,50}" placeholder="Last name" onChange={handlerOnChangeLastName}/>
				<button type="submit" className="button__style">Greet Me</button>
			</form>
		</section>
	);
}

export default Exercicio7;