import "./List.css";
export const OrderedList = (props) => {
  const { className } = props;
  return (
    <div className={`ordered-list-wrapper ${className}`}>
      <ol className={`ordered-list-item-wrapper ${className}`}>
        <li>Array</li>
        <li>Linked List</li>
        <li>Stacks</li>
        <li>Queues</li>
        <li>Trees</li>
        <li>Graphs</li>
      </ol>
    </div>
  );
};

export const UnOrderedList = (props) => {
  const { className } = props;
  return (
    <div className={`unordered-list-wrapper ${className}`}>
      <ul className={`unordered-list-item-wrapper ${className}`}>
        <li>Pythan</li>
        <li>Java Script</li>
        <li>C++</li>
        <li>Java</li>
        <li>Ruby</li>
        <li>SQL</li>
      </ul>
    </div>
  );
};

export const NoneBulletList = (props) => {
  const { className } = props;
  return (
    <div className={`none-bullet-list-wrapper ${className}`}>
      <ul className={`none-bullet-list-item-wrapper ${className}`}>
        <li>Arithmetic Operators</li>
        <li>Relational Operators</li>
        <li>Logical Operators</li>
      </ul>
    </div>
  );
};

export const CircleList = (props) => {
  const { className } = props;
  return (
    <div className={`circle-list-wrapper ${className}`}>
      <ul className={`circle-list-item-wrapper ${className}`}>
        <li>Samsung</li>
        <li>Xiaomi</li>
        <li>Nokia</li>
        <li>Nokia Corporation</li>
        <li>OPPO</li>
        <li>HTC</li>
      </ul>
    </div>
  );
};

export const SquareList = (props) => {
  const { className } = props;
  return (
    <div className={`square-list-wrapper ${className}`}>
      <ul className={`square-list-item-wrapper ${className}`}>
        <li> Baked goods</li>
        <li>Cereals</li>
        <li>Dairy products</li>
        <li>Edible plants</li>
        <li>Edible fungi</li>
        <li>Legumes</li>
      </ul>
    </div>
  );
};

export const UpperRomanList = (props) => {
  const { className } = props;
  return (
    <div className={`upperRoman-list-wrapper ${className}`}>
      <ul className="upperRoman-list-item-wrapper">
        <li> Breakfast & Cereals</li>
        <li>Canned, Jarred, & Pouched Foods</li>
        <li>Grains, Pasta & Sides</li>
        <li>Produce</li>
        <li>Snacks</li>
        <li>Baking & Cooking Supplies</li>
      </ul>
    </div>
  );
};

export const LowerAlphaList = (props) => {
  const { className } = props;
  return (
    <div className={`LowerAlpha-list-wrapper ${className}`}>
      <ul className="lowerAlpha-list-item-wrapper">
        <li>Green Tea</li>
        <li>White Tea</li>
        <li>Matcha</li>
        <li>Oolong</li>
        <li>Earl Grey</li>
        <li>Masala chai</li>
      </ul>
    </div>
  );
};
