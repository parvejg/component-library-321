import "./Input.css";
export const TextInput = (props) => {
  const { placeholder, type, className } = props;
  return (
    <>
      <input
        className={`text-input ${className}`}
        placeholder={placeholder ? placeholder : "Enter your Text"}
        type={type ? type : "text"}
      ></input>
    </>
  );
};

export const PasswordInput = (props) => {
  const { placeholder, type, className } = props;
  return (
    <>
      <input
        className={`password-input ${className}`}
        placeholder={placeholder ? placeholder : "Enter your Password"}
        type={type ? type : "password"}
      ></input>
    </>
  );
};

export const DateInput = (props) => {
  const { placeholder, type, className } = props;
  return (
    <>
      <input
        className={`date-input ${className}`}
        placeholder={placeholder ? placeholder : "Enter your Birth Date"}
        type={type ? type : "date"}
      ></input>
    </>
  );
};
