import "./Input.css";
export const TextInput = (props) => {
  const { placeholder, type, textInputClass } = props;
  return (
    <>
      <input
        className={`text-input ${textInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Text"}
        type={type ? type : "text"}
      ></input>
    </>
  );
};

export const PasswordInput = (props) => {
  const { placeholder, type, passwordInputClass } = props;
  return (
    <>
      <input
        className={`password-input ${passwordInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Password"}
        type={type ? type : "password"}
      ></input>
    </>
  );
};

export const DateInput = (props) => {
  const { placeholder, type, dateInputClass } = props;
  return (
    <>
      <input
        className={`date-input ${dateInputClass}`}
        placeholder={placeholder ? placeholder : "Enter your Birth Date"}
        type={type ? type : "date"}
      ></input>
    </>
  );
};
