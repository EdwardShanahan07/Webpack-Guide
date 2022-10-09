import _ from "lodash";
import "./style.css";
import Logo from "./webpack-logo.png";

const arr = ["Hello", "Webpack"];

function component() {
  const divElement = document.createElement("div");

  divElement.innerHTML = _.join(arr, " ");
  divElement.classList.add("hello");

  const imgElement = document.createElement("img");

  imgElement.src = Logo;

  divElement.appendChild(imgElement);

  return divElement;
}

document.body.appendChild(component());
