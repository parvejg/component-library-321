const  Buttoncomponent =(props)=>{ 
    const {color, name} = props;
    return (  <button  className="btn">{name}</button> );
};

 
const DeleteBtn =(props) =>{
    const { src} = props
    return (
        <button   src={src} ><img  className="DeleteBtn"src={src}/></button>
    )
}
const RadioGrp =(props)=>{
    const {name, type, value, className} = props
    return (<>
       <label  className={className} >{name} <input value={value} type={type} name="gender" /></label>
       </> )
}
export    {Buttoncomponent,RadioGrp, DeleteBtn};