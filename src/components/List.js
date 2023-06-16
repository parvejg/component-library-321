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
            <li key={obj.id} className="list-item">
              {obj.item}
            </li>
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
    {id: "1",item: "Arithmetic Operator"},
    {id: "1",item: "Relational Operator"},
    {id: "1",item: "Logical Operator"},
  ];
  const newArryList = newNoneBulletList ? newNoneBulletList:  noneBulletArrayList
  return (
    <div className="none-bullet-list-wrapper">
      <ul className="none-bullet-list-item-wrapper">
       {
        newArryList.map((noneBulletObj)=>{
          return <li>{noneBulletObj.item}</li>
        })
       }
      </ul>
    </div>
  );
};

export const CircleList = (props) => {
  const {newCircleList} = props;
  const circleArrayList = [
    {id: "1", item: "Samsung"},
    {id: "1", item: "Xiaomi"},
    {id: "1", item: "Nokia"},
    {id: "1", item: "Nokia Corporation"},
    {id: "1", item: "OPPO"},
    {id: "1", item: "HTC"},
  ];
  const newList = newCircleList ? newCircleList: circleArrayList; 
  return (
    <div className="circle-list-wrapper">
      <ul className="circle-list-item-wrapper">
       {
        newList.map((CircleListObj)=>{
          return <li>{CircleListObj.item}</li>
        })
       }
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

export const LowerAlphaList = () => {
  return (
    <div className="LowerAlpha-list-wrapper">
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
