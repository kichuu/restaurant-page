console.log("hi2")
import "./styles.css";
import {Menu} from "./menu.js"
import { About } from "./about.js";
import { Home } from "./home.js";

const pageContent = document.querySelector("#content")

const homeButton = document.querySelector("#home-button")
homeButton.addEventListener("click" ,()=> tabSwitch(Home()) )

const menuButton = document.querySelector("#menu-button")
menuButton.addEventListener("click" , ()=> tabSwitch(Menu()))

const aboutButton = document.querySelector("#about-button")
aboutButton.addEventListener("click" , ()=> tabSwitch(About()))

const tabSwitch = function(navButton){
    pageContent.innerHTML=""
    pageContent.appendChild(navButton)
}

