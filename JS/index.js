const body = document.querySelector("body");
body.style.backgroundColor = "purple";


function handleWindowResize() {
    let newColor;
  if (window.innerWidth > 800) {
    newColor = "#FFD700";
  } else if (window.innerWidth>500 ) {
    newColor = "purple";
  } else {
    newColor = "#4682B4";
  }
  body.style.backgroundColor = newColor;
}
window.addEventListener("resize", handleWindowResize);
