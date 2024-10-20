import "./Input.css";
export const TextInput = (props) => {
  const { placeholder, textInputClass } = props;
  return (
    <>
      <input
        className={`text-input ${textInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Text"}
        type="text"
      ></input>
    </>
  );
};

export const PasswordInput = (props) => {
  const { placeholder,  passwordInputClass } = props;
  return (
    <>
      <input
        className={`password-input ${passwordInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Password"}
        type= "password"
      ></input>
    </>
  );
};

export const DateInput = (props) => {
  const { placeholder,  dateInputClass } = props;
  return (
    <>
      <input
        className={`date-input ${dateInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Birth Date"}
        type="date"
      ></input>
    </>
  );
};
