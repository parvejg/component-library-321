export const OutlineBtn = (props)=>{
    const {name,className} = props
    return (
        <button className={`btn ${className}`  }>{name}</button>
    )
};
