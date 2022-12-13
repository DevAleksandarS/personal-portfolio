const arrProjects = [
  {
    name: "Inverted",
    logo: "../images/inverted-project.jpg",
    screenshot: "../images/inverted-ss.jpg",
    description: "",
    webLink: "",
    gitLink: "",
    technologyUsed: ["HTML", "CSS", "React", "React-Router DOM", "Netlify"],
  },
];

// SKILL BOXES
const netBox = document.querySelector(".internet");
const htmlBox = document.querySelector(".html");
const cssBox = document.querySelector(".css");
const javascriptBox = document.querySelector(".javascript");
const bootstrapBox = document.querySelector(".bootstrap");
const gitBox = document.querySelector(".git");
const reactBox = document.querySelector(".react");
const reactRouterBox = document.querySelector(".react-router");
const sassBox = document.querySelector(".sass");

// LINES
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const line6 = document.getElementById("line6");
const line7 = document.getElementById("line7");
const line8 = document.getElementById("line8");
const line9 = document.getElementById("line9");
const line10 = document.getElementById("line10");
const line11 = document.getElementById("line11");

// PROJECT ELEMENTS
const projectBox = document.querySelectorAll(".project");

// TIME FOR TIMER
let timeTimer = 7000;

// SCRIPT
netBox.classList.remove("water-fill-animation-block");
netBox.classList.add("water-fill-animation");

setTimeout(() => {
  line1.classList.add("line-fill-animation-first-second");
  line2.classList.add("line-fill-animation-first-second");
}, 7000);

setTimeout(() => {
  line3.classList.add("line-fill-animation-third-fourth");
  line4.classList.add("line-fill-animation-third-fourth");
}, 10000);

setTimeout(() => {
  htmlBox.classList.remove("water-fill-animation-block");
  cssBox.classList.remove("water-fill-animation-block");
  htmlBox.classList.add("water-fill-animation");
  cssBox.classList.add("water-fill-animation");
}, 13000);

setTimeout(() => {
  line5.classList.add("line-fill-animation-fifth-sixth");
  line6.classList.add("line-fill-animation-fifth-sixth");
}, 20000);

setTimeout(() => {
  javascriptBox.classList.remove("water-fill-animation-block");
  javascriptBox.classList.add("water-fill-animation");
}, 23000);

setTimeout(() => {
  line7.classList.add("line-fill-animation-seventh");
}, 30000);

setTimeout(() => {
  bootstrapBox.classList.remove("water-fill-animation-block");
  bootstrapBox.classList.add("water-fill-animation");
}, 33000);

setTimeout(() => {
  line8.classList.add("line-fill-animation-eighth");
}, 40000);

setTimeout(() => {
  gitBox.classList.remove("water-fill-animation-block");
  gitBox.classList.add("water-fill-animation");
}, 43000);

setTimeout(() => {
  line9.classList.add("line-fill-animation-ninth");
}, 50000);

setTimeout(() => {
  reactBox.classList.remove("water-fill-animation-block");
  reactBox.classList.add("water-fill-animation");
}, 53000);

setTimeout(() => {
  line10.classList.add("line-fill-animation-tenth");
}, 60000);

setTimeout(() => {
  reactRouterBox.classList.remove("water-fill-animation-block");
  reactRouterBox.classList.add("water-fill-animation");
}, 63000);

setTimeout(() => {
  line11.classList.add("line-fill-animation-eleventh");
}, 70000);

setTimeout(() => {
  sassBox.classList.remove("water-fill-animation-block");
  sassBox.classList.add("water-fill-animation");
}, 73000);

// PROJECTS
projectBox.forEach((project, index) => {
  project.addEventListener("mouseover", (e) => {
    project.children[0].style.opacity = "98%";
    project.children[1].style.transform = "translate(-50%, -100%)";
    project.children[2].style.transform = "translate(-50%, 0)";
  });

  project.addEventListener("mouseleave", (e) => {
    project.children[0].style.opacity = "0";
    project.children[1].style.transform = "translate(-50%, 0)";
    project.children[2].style.transform = "translate(-50%, 100%)";
  });
});
