import helloWorld from "./hello-world";
import imgSrc from "./assets/12.jpg";
helloWorld();

const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);
