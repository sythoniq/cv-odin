function Input(props) {
  return (
    <label htmlFor={props.id}>{props.text}
      <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={(e) => props.handleChange(e.target)} />
    </label>
  )
}

export default Input
