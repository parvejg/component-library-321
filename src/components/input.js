function Inputs(props){
    const {placeholder, type, value } = props
    return ( <>
    <input className="inputs" value={value} placeholder={placeholder} type={type}></input></>)
    
}
export default Inputs;