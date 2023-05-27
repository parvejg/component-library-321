const ElevatedBtn =(props)=>{
    const {className, name} = props
    return (
        <button className={className}>{name}</button>
    )
}
export default ElevatedBtn;