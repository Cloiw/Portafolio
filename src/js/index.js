//
const navIcon = document.getElementById("nav-menu-icon");
const navBar = document.getElementById("nav-ul-id");

const createNavBarLi = (text,href,navBar) =>{
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.appendChild(document.createTextNode(text));
  a.setAttribute("href" , href);
  li.appendChild(a)
  
  li.setAttribute("class", "nav-li");
  navBar.appendChild(li);
  setTimeout(function() {
    li.className = li.className + " show";
  }, 100);
}

navIcon.addEventListener('click', () =>{
    

    if (navBar.className === "nav-ul") {
      while (navBar.firstChild) {
        navBar.firstChild.remove();
      }
      navBar.className += "-resp"; 
      setTimeout(function() {
        createNavBarLi("PROYECTOS","#/",navBar);
      }, 0);
      setTimeout(function() {
        createNavBarLi("HERRAMIENTAS","#/",navBar);
      }, 100);
      setTimeout(function() {
        createNavBarLi("ACERCA DE MI","#/",navBar);
      }, 200);
      setTimeout(function() {
        createNavBarLi("CONTACTO","#/",navBar);
      }, 300);
      
     
      
    } else {
      navBar.className = "nav-ul";
    }




for (i = 0; i < navBar.getElementsByTagName("LI").length; i++) {
    navBar.getElementsByTagName("LI")[i].addEventListener('click', () =>{
      
      setTimeout(function () {
        navBar.className = "nav-ul";
      }, 200);
      
    })
}
  }
)