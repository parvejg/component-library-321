
export const  ElevatedButton =(props)=>{ 
    const {name, className} = props;
    return (  <button  className={`btn ${className}`  }>{name ? name: "Elevated Btn"}</button> );
};

 
