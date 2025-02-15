import React from 'react'
import { Layout } from "./Layout";
import {
  CircleList,
  LowerAlphaList,
  OrderedList,
  SquareList,
  UnOrderedList,
  UpperRomanList,
  NoneBulletList,
} from "./List";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
export const ListPage = () => {
  return (
    <Layout>
      <div className="list-container">
        <h2> Ordered List</h2>
        <OrderedList />
        <div className="iframe-wrapper">
          <iframe
            title="ordered-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520OrderedList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520arrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%25201%252C%2520item%253A%2520%2522Array%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%25202%252C%2520item%253A%2520%2522Stacks%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%25203%252C%2520item%253A%2520%2522Queues%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%25204%252C%2520item%253A%2520%2522Trees%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%25205%252C%2520item%253A%2520%2522Graphs%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520readyList%2520%253D%2520newList%2520%253F%2520newList%2520%253A%2520arrayList%253B%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Col%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BreadyList.map%28%28obj%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522ordered-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520key%253D%257Bobj.id%257D%2520className%253D%2522list-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bobj.item%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2> Unordered List</h2>
        <UnOrderedList />
        <div className="iframe-wrapper">
          <iframe
            title="unordered-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520UnOrderedList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newunOderedList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520unorderedArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Pythan%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522Java%2520Script%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522C%252B%252B%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25224%2522%252C%2520item%253A%2520%2522Java%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25225%2522%252C%2520item%253A%2520%2522Ruby%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25226%2522%252C%2520item%253A%2520%2522SQL%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newArryList%2520%253D%2520newunOderedList%2520%253F%2520newunOderedList%2520%253A%2520unorderedArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522unordered-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522unordered-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BnewArryList.map%28%28unOderedList%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BunOderedList.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2>Circle List</h2>
        <CircleList />
        <div className="iframe-wrapper">
          <iframe
            title="circle-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520CircleList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newCircleList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520circleArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Samsung%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522Xiaomi%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522Nokia%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25224%2522%252C%2520item%253A%2520%2522Nokia%2520Corporation%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25225%2522%252C%2520item%253A%2520%2522OPPO%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25226%2522%252C%2520item%253A%2520%2522HTC%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newList%2520%253D%2520newCircleList%2520%253F%2520newCircleList%2520%253A%2520circleArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522circle-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522circle-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BnewList.map%28%28CircleListObj%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BCircleListObj.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2> Square List</h2>
        <SquareList />
        <div className="iframe-wrapper">
          <iframe
            title="square-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SquareList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newSquareList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520squareArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Baked%2520goods%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522Cereals%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522Dairy%2520products%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25224%2522%252C%2520item%253A%2520%2522Edible%2520plants%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25225%2522%252C%2520item%253A%2520%2522Edible%2520fungi%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25226%2522%252C%2520item%253A%2520%2522Legumes%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newlist%2520%253D%2520newSquareList%2520%253F%2520newSquareList%2520%253A%2520squareArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522square-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522%2520square-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257Bnewlist.map%28%28squareListItem%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BsquareListItem.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2>Upper Roman List</h2>
        <UpperRomanList />
        <div className="iframe-wrapper">
          <iframe
            title="upper-roman-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520UpperRomanList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520upperRomanArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Breakfast%2520%2526%2520cereals%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522Canned%252C%2520Jarred%252C%2520%2526%2520Pouched%2520Foods%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522Grains%252C%2520Pasta%2520%2526%2520Sides%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25224%2522%252C%2520item%253A%2520%2522Produce%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25225%2522%252C%2520item%253A%2520%2522Snacks%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25226%2522%252C%2520item%253A%2520%2522Baking%2520%2526%2520cooking%2520supplies%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newUpperRomanArrayList%2520%253D%2520newList%2520%253F%2520newList%2520%253A%2520upperRomanArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522upperRoman-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522upperRoman-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BnewUpperRomanArrayList.map%28%28upperRomanListItem%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BupperRomanListItem.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2>Lower Alpha List</h2>
        <LowerAlphaList />
        <div className="iframe-wrapper">
          <iframe
            title="lower-alpha-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520LowerAlphaList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520newLowerAlphaArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Green%2520Tea%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522White%2520Tea%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522Matcha%2520Tea%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25224%2522%252C%2520item%253A%2520%2522Oolong%2520Tea%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25225%2522%252C%2520item%253A%2520%2522Earl%2520Grey%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25226%2522%252C%2520item%253A%2520%2522Masala%2520Tea%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newLowerAlphaList%2520%253D%2520newList%2520%253F%2520newList%2520%253A%2520newLowerAlphaArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522LowerAlpha-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522lowerAlpha-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BnewLowerAlphaList.map%28%28lowerAiphaListItem%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BlowerAiphaListItem.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h2> Non Bullet List</h2>
        <NoneBulletList />
        <div className="iframe-wrapper">
          <iframe
            title="none-bullet-list"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520NoneBulletList%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520newNoneBulletList%2520%257D%2520%253D%2520props%253B%250A%2520%2520const%2520noneBulletArrayList%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25221%2522%252C%2520item%253A%2520%2522Arithmetic%2520Operator%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25222%2522%252C%2520item%253A%2520%2522Relational%2520Operator%2522%2520%257D%252C%250A%2520%2520%2520%2520%257B%2520id%253A%2520%25223%2522%252C%2520item%253A%2520%2522Logical%2520Operator%2522%2520%257D%252C%250A%2520%2520%255D%253B%250A%2520%2520const%2520newArryList%2520%253D%2520newNoneBulletList%250A%2520%2520%2520%2520%253F%2520newNoneBulletList%250A%2520%2520%2520%2520%253A%2520noneBulletArrayList%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522none-bullet-list-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522none-bullet-list-item-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BnewArryList.map%28%28noneBulletObj%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cli%253E%257BnoneBulletObj.item%257D%253C%252Fli%253E%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="navigation-btn-container">
          <Link to="/input-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/modal-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
