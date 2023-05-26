const  Buttoncomponent =(props)=>{ 
    const {color, name} = props;
    return (  <button  className="btn">{name}</button> );
};

 
const DeleteBtn =(props) =>{
    const { src} = props
    return (
        <button className="DeleteBtn" ><img  className="DeleteBtnImg" src={src}/></button>
    )
}
const RadioGrp =(props)=>{
    const {name, type} = props
    return (
       <label  >{name}<input type={type} name="gender" /></label>
        )
}
export    {Buttoncomponent,RadioGrp, DeleteBtn};