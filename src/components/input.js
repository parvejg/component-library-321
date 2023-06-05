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

export const PasswordInput=(props)=> {
      const { placeholder, type, className } = props;
      return (<>
            <input
            className={`password-input ${className}`}
            placeholder={placeholder ? placeholder : "Enter your password"}
            type={type ? type : "password"}
            ></input>
            </>
      );
    }
    
export const DateInput=(props)=> {
      const { placeholder, type, className } = props;
      return (<>
            <input
            className={`date-input ${className}`}
            placeholder={placeholder ? placeholder : "Enter your Birth date"}
            type={type ? type : "date"}
            ></input>
            </>
      );
    }

