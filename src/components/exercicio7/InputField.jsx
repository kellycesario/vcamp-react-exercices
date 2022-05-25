const InputField = (props) => {

        return (
            <section>
                <input type="text" value={props.value1} className={props.className} pattern={props.pattern} placeholder={props.placeholder} onChange={props.onChange} required/>
            </section>
        )
}

export default InputField;