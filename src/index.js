import _ from "lodash";
import "./styles/style.css";
import xtocat from "./images/xtocat.jpg";
import Data from "./data/data.xml";

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing  div.
  var myImg = new Image();
  myImg.src = xtocat;
  element.appendChild(myImg);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
