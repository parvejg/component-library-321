import "./List.css";
export const OrderedList = (props) => {
  const { newList } = props;
  const arrayList = [
    { id: 1, item: "Array" },
    { id: 2, item: "Stacks" },
    { id: 3, item: "Queues" },
    { id: 4, item: "Trees" },
    { id: 5, item: "Graphs" },
  ];
  const readyList = newList ? newList : arrayList;

  return (
    <div>
      <ol>
        {readyList.map((obj) => {
          return (
            <div className="ordered-list-wrapper">
              <li key={obj.id} className="list-item">
              {obj.item}
            </li>
            </div>
            
          );
        })}
      </ol>
    </div>
  );
};

// {
//   readyList
//     ? readyList.map((obj) => {
//         return <li key={1}>{obj.item}</li>;
//       })
//     : newList.map((obj) => {
//         return <li>obj.item</li>;
//       });
// }

export const UnOrderedList = (props) => {
  const { newunOderedList } = props;
  const unorderedArrayList = [
    { id: "1", item: "Pythan" },
    { id: "2", item: "Java Script" },
    { id: "3", item: "C++" },
    { id: "4", item: "Java" },
    { id: "5", item: "Ruby" },
    { id: "6", item: "SQL" },
  ];
  const newArryList = newunOderedList ? newunOderedList : unorderedArrayList;
  return (
    <div className="unordered-list-wrapper">
      <ul className="unordered-list-item-wrapper">
        {newArryList.map((unOderedList) => {
          return <li>{unOderedList.item}</li>;
        })}
      </ul>
    </div>
  );
};

export const NoneBulletList = (props) => {
  const { newNoneBulletList } = props;
  const noneBulletArrayList = [
    { id: "1", item: "Arithmetic Operator" },
    { id: "2", item: "Relational Operator" },
    { id: "3", item: "Logical Operator" },
  ];
  const newArryList = newNoneBulletList
    ? newNoneBulletList
    : noneBulletArrayList;
  return (
    <div className="none-bullet-list-wrapper">
      <ul className="none-bullet-list-item-wrapper">
        {newArryList.map((noneBulletObj) => {
          return <li>{noneBulletObj.item}</li>;
        })}
      </ul>
    </div>
  );
};

export const CircleList = (props) => {
  const { newCircleList } = props;
  const circleArrayList = [
    { id: "1", item: "Samsung" },
    { id: "2", item: "Xiaomi" },
    { id: "3", item: "Nokia" },
    { id: "4", item: "Nokia Corporation" },
    { id: "5", item: "OPPO" },
    { id: "6", item: "HTC" },
  ];
  const newList = newCircleList ? newCircleList : circleArrayList;
  return (
    <div className="circle-list-wrapper">
      <ul className="circle-list-item-wrapper">
        {newList.map((CircleListObj) => {
          return <li>{CircleListObj.item}</li>;
        })}
      </ul>
    </div>
  );
};

export const SquareList = (props) => {
  const { newSquareList } = props;
  const squareArrayList = [
    { id: "1", item: "Baked goods" },
    { id: "2", item: "Cereals" },
    { id: "3", item: "Dairy products" },
    { id: "4", item: "Edible plants" },
    { id: "5", item: "Edible fungi" },
    { id: "6", item: "Legumes" },
  ];
  const newlist = newSquareList ? newSquareList : squareArrayList;
  return (
    <div className="square-list-wrapper">
      <ul class=" square-list-item-wrapper">
        {newlist.map((squareListItem) => {
          return <li>{squareListItem.item}</li>;
        })}
      </ul>
    </div>
  );
};

export const UpperRomanList = (props) => {
  const { newList } = props;
  const upperRomanArrayList = [
    { id: "1", item: "Breakfast & cereals" },
    { id: "2", item: "Canned, Jarred, & Pouched Foods" },
    { id: "3", item: "Grains, Pasta & Sides" },
    { id: "4", item: "Produce" },
    { id: "5", item: "Snacks" },
    { id: "6", item: "Baking & cooking supplies" },
  ];
  const newUpperRomanArrayList = newList ? newList : upperRomanArrayList;
  return (
    <div className="upperRoman-list-wrapper">
      <ul className="upperRoman-list-item-wrapper">
        {newUpperRomanArrayList.map((upperRomanListItem) => {
          return <li>{upperRomanListItem.item}</li>;
        })}
      </ul>
    </div>
  );
};

export const LowerAlphaList = (props) => {
  const { newList } = props;
  const newLowerAlphaArrayList = [
    { id: "1", item: "Green Tea" },
    { id: "2", item: "White Tea" },
    { id: "3", item: "Matcha Tea" },
    { id: "4", item: "Oolong Tea" },
    { id: "5", item: "Earl Grey" },
    { id: "6", item: "Masala Tea" },
  ];
  const newLowerAlphaList = newList ? newList : newLowerAlphaArrayList;
  return (
    <div className="LowerAlpha-list-wrapper">
      <ul className="lowerAlpha-list-item-wrapper">
        {newLowerAlphaList.map((lowerAiphaListItem) => {
          return <li>{lowerAiphaListItem.item}</li>;
        })}
      </ul>
    </div>
  );
};
