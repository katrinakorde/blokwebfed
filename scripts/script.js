var openButton = document.querySelector("header button:nth-of-type(2)");
var sluitButton = document.querySelector("nav button");
var clickLogo = document.querySelector("header img:first-of-type");
var darkButton = document.querySelector(".dark-mode")
var geluid = ["audio/geluidje.mp3"];
var at5Geluid = new Audio(geluid[0]);
var bodyindex = document.querySelector(".index");
var darkstatus = 0;

function Geluid(event) {
  at5Geluid.play();
}

function openMenu() {  
   var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}


function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

function darkmode(){
  if (darkstatus == 0){
  bodyindex.classList.add("darkbody");
  console.log("dark");
  darkstatus = 1;
}
else if  (darkstatus == 1){
  bodyindex.classList.remove("darkbody");
  console.log("light");
  darkstatus = 0;
}}
openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);
clickLogo.addEventListener("click",Geluid);
darkButton.addEventListener("click", darkmode);

/* <!--  hamburger menu js https://codepen.io/shooft/pen/GRxXboQ  --> */