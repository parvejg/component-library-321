import "./List.css";
export const OrderedList = (props) => {
  const { className } = props;
  return (
    <div className="ordered-list-wrapper">
      <ol className="ordered-list-item-wrapper">
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
    <div className="unordered-list-wrapper">
      <ul className="unordered-list-item-wrapper">
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
    <div className="none-bullet-list-wrapper">
      <ul className="none-bullet-list-item-wrapper">
        <li>Arithmetic Operators</li>
        <li>Relational Operators</li>
        <li>Logical Operators</li>
      </ul>
    </div>
  );
};

export const CircleList = (props) => {
  return (
    <div className="circle-list-wrapper">
      <ul className="circle-list-item-wrapper">
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

export const SquareList = () => {
  return (
    <div className="square-list-wrapper">
      <ul class=" square-list-item-wrapper">
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

export const UpperRomanList = () => {
  return (
    <div className="upperRoman-list-wrapper">
      <ul
        className="upperRoman-list-item-wrapper"
      >
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

export const LowerAlphaList = () => {
  return (
    <div className="LowerAlpha-list-wrapper">
      <ul
        className="lowerAlpha-list-item-wrapper"
      >
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
