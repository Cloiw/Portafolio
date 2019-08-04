//
const navIcon = document.getElementById("nav-menu-icon")
navIcon.addEventListener('click', () =>{
    console.log("hola")
    let navBar = document.getElementById("nav-ul-id");
    if (navBar.className === "nav-ul") {
      navBar.className += "-resp";
    } else {
      navBar.className = "nav-ul";
    }
  }
)