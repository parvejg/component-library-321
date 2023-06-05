import './Outline-btn.css'
export const OutlineBtn = (props)=>{
    const {name,className} = props
    return (
        <button className={`outline-Btn ${className}`  }>{name ? name: "Outline"}</button>
    )
};
