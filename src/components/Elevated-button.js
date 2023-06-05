import "./Elevated-button.css";
export const ElevatedButton = (props) => {
  const { name, className } = props;
  return (
    <button className={`elevated-btn ${className}`}>
      {name ? name : "Elevated"}
    </button>
  );
};
