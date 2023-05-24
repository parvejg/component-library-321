const CheckBox =(props)=>{
    const {name, value} = props
    return (
        <input type="checkbox" className="checkBox" value={value} />
    )
}
export default CheckBox;