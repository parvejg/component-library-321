import './Text-Btn.css';
 export const TextBtn =(props)=>{
    const {name, className} = props
    return( <button className={`txtBtn ${className}`}>{name ? name: "Text Btn"}</button>
    );
}