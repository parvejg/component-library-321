

const  Buttoncomponent =(props)=>{ 
    const {name, className} = props;
    return (  <button  className={`btn ${className}`  }>{name}</button> );
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
 

export    {Buttoncomponent,OutlineBtn,TextBtn};