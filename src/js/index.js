//
const navIcon = document.getElementById("nav-menu-icon");
const navBar = document.getElementById("nav-ul-id");


const createNavBarLi = (text,href,navBar) =>{
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.appendChild(document.createTextNode(text));
  a.setAttribute("href" , href);
  li.appendChild(a)
  li.setAttribute("class", "nav-li");
  navBar.appendChild(li);

  setTimeout( ()=> {
    li.className = li.className + " show";
  }, 100);
}

const hideNavBarLi = () =>{
  for (i = 0; i < navBar.getElementsByTagName("LI").length; i++) {
    navBar.getElementsByTagName("LI")[i].addEventListener('click', () =>{
        navBar.className = navBar.className + " hidden";
        changeIconMenu("☰");
        setTimeout( () => {
          
          navBar.className = "nav-ul";
        }, 500);
    })
  }
}

const changeIconMenu = (text) =>{
  navIcon.removeChild(navIcon.childNodes[0])
  navIcon.appendChild(document.createTextNode(text));
  
}


navIcon.addEventListener('click', () =>{
  changeIconMenu("X");

  if (navBar.className === "nav-ul") {

    while (navBar.firstChild) {
      navBar.firstChild.remove();
    }

    navBar.className += "-resp"; 

    setTimeout(() => {
      createNavBarLi("PROYECTOS","#",navBar);
    }, 0);

    setTimeout(() => {
      createNavBarLi("HERRAMIENTAS","#/",navBar);
    }, 100);

    setTimeout(() => {
      createNavBarLi("ACERCA DE MI","#/",navBar);
    }, 200);

    setTimeout(() => {
      createNavBarLi("CONTACTO","#/",navBar);
    }, 300);
    
    setTimeout(() => {
      hideNavBarLi();
    }, 300);
      
    } else {
      changeIconMenu("☰");
      navBar.className = navBar.className + " hidden";
      setTimeout(() => {
        navBar.className = "nav-ul";
      }, 500);
    }
  }
)