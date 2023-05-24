function Inputs(props){
    const {placeholder, type, value } = props
    return ( <>
    <input value={value} placeholder={placeholder} type={type}></input></>)
    
}
export default Inputs;