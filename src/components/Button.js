import './Button.css';
export const ElevatedButton = (props) => {
  const { name, className } = props;
  return (
    <button className={`elevated-btn ${className}`}>
      {name ? name : "Elevated"}
    </button>
  );
};

export const OutlineBtn = (props)=>{
    const {name,className} = props
    return (
        <button className={`outline-Btn ${className}`  }>{name ? name: "Outline"}</button>
    )
};
 export const TextBtn =(props)=>{
    const {name, className} = props
    return( <button className={`txtBtn ${className}`}>{name ? name: "Text Btn"}</button>
    );
}
