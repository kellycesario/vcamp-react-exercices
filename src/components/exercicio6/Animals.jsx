const Animals = (props) => {
    
    return (
        <section>
            <p> {props.title} </p>
            <span role={props.img}> {props.children} </span>
        </section>
    )
}

export default Animals;