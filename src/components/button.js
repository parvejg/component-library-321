

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
 
// const SendIcon =(props)=>{
//     const {name, className} = props
//     return(<><button className={className} startIcon ={<SendIcon/>} sx={{m: 4}}>Send</button>
//     </>

//     )
    
// }
// const  AddIcCallRoundedIcon =(props)=>{
//     const {className}= props;
//     return(
//         <>
//         <button className={className}></button>
//         </>
//     )
// }

export    {Buttoncomponent,OutlineBtn,TextBtn};