export default function InputValidation({ value, onChange, type, rules }) {
    
    return (
        <>
            <input type={type} value={value} onChange={onChange} className="form-control"></input>

            {
                rules &&
                value.length > 0 ?
               
                <ul className="alert alert-primary">
                    {rules.map(rule => {
                            return (<li>{rule.fn(value)? '✅' : '❌'} {rule.text}</li>)
                    })}
                </ul> : ''}

        </>)
}