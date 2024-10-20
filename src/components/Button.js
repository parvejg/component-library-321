import React from 'react'
import "./Button.css";
export const ElevatedButton = (props) => {
  const { name, elevatedBtnClass } = props;
  return (
    <button className={`elevated-btn ${elevatedBtnClass}`}>
      {name ? name : "Elevated"}
    </button>
  );
};

export const OutlineBtn = (props) => {
  const { name, outlineBtnClass } = props;
  return (
    <button className={`outline-Btn ${outlineBtnClass}`}>
      {name ? name : "Outline"}
    </button>
  );
};
export const TextBtn = (props) => {
  const { name, txtBtnClass } = props;
  return (
    <button className={`txtBtn ${txtBtnClass}`}>
      {name ? name : "Text Btn"}
    </button>
  );
};
export const JavascriptBtn = (props) => {
  const { btnName } = props;
  return <button className="jsBtn">{btnName ? btnName : "Javascript"}</button>;
};
