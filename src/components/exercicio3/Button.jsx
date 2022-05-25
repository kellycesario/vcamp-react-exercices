const OnClickButton = (props) => {
    
    const clickMe = () => {
		alert(`You clicked on ${props.children}`)
	}

    return (
        <button className={props.className} onClick={clickMe}> {props.children} </button>
    )
}

export default OnClickButton;