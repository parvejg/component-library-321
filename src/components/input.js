import "./Input.css";
 export const GmailInput=(props)=> {
  const { placeholder, type, className } = props;
  return (<>
        <input
        className={`gmail-input ${className}`}
        placeholder={placeholder ? placeholder : "Enter your gmail"}
        type={type ? type : "text"}
        ></input>
        </>
  );
}
