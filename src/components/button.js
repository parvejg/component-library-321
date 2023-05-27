const  Buttoncomponent =(props)=>{ 
    const {name} = props;
    return (  <button  className="btn">{name}</button> );
};
const OutlineBtn = (props)=>{
    const {name,className} = props
    return (
        <button className={className}>{name}</button>
    )
}
const TextBtn =(props)=>{
    const {name, className} = props
    return(
        <button className={className}>{name}</button>
    )
}
 
const DeleteBtn =(props) =>{
    const { src} = props
    return (
        <button className="DeleteBtn" ><img  className="DeleteBtnImg" src={src}/></button>
    )
}

export    {Buttoncomponent,OutlineBtn,TextBtn, DeleteBtn};