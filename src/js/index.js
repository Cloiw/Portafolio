//
const navIcon = document.getElementById("nav-menu-icon");
const navBar = document.getElementById("nav-ul-id");

navIcon.addEventListener('click', () =>{
    
    if (navBar.className === "nav-ul") {
      navBar.className += "-resp";
    } else {
      navBar.className = "nav-ul";
    }
  }
)


for (i = 0; i < navBar.getElementsByTagName("LI").length; i++) {
    navBar.getElementsByTagName("LI")[i].addEventListener('click', () =>{
     
      setTimeout(function () {
        navBar.className = "nav-ul";
      }, 200);
      
    })
}
