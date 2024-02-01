function checkScreenSize() {
  if (window.innerWidth < 550) {
    console.log("hello");

    document.querySelector("#centeredParagraph").style.display = "block";
    document.querySelector("#effect").style.display = "none";
  } else {
    document.querySelector("#centeredParagraph").style.display = "none";
    document.querySelector("#effect").style.display = "block";
  }
}

window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);
