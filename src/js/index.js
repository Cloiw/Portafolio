//
const navIcon = document.getElementById("IdNavMenuIcon");
const navBar = document.getElementById("IdNavMenuUl");
const projectOneImg = document.getElementById("idProjectOneImg");
const projectOneCloseBtn = document.getElementById('idProjectOneCloseBtn');
const infoProjectOneBtn = document.getElementById('idProjectInfoOneBtn')
const infoProjectOneDiv = document.getElementById('idProjectInfoOneDiv')

const createNavBarLi = (text,href,navBar) => {
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

const hideNavBarLi = (icon) => {
  for (i = 0; i < navBar.getElementsByTagName("LI").length; i++) {
    navBar.getElementsByTagName("LI")[i].addEventListener('click', () => {
        navBar.className = navBar.className + " hidden";
        changeIconMenu(icon);
        setTimeout( () => {
          navBar.className = "nav-ul";
        }, 500);
    })
  }
}

const changeIconMenu = (newSrc) => {
  navIcon.src = newSrc;
}

const showOrHideInfoProject = (imgToHide, infoToShow) => {
  if (imgToHide.className === "project-image-src" && infoToShow.className === "project-info not-display") {
    infoToShow.className = "project-info"
    imgToHide.className += " not-display"
    return
  }
  if (imgToHide.className === "project-image-src not-display" && infoToShow.className === "project-info"){
    imgToHide.className = "project-image-src"
    infoToShow.className += " not-display"
    return
  }
}

infoProjectOneBtn.addEventListener('click', () => {
 showOrHideInfoProject(projectOneImg,infoProjectOneDiv) 
})
projectOneCloseBtn.addEventListener('click', () => {
  showOrHideInfoProject(projectOneImg,infoProjectOneDiv)
})


navIcon.addEventListener('click', () => {
  changeIconMenu("./src/img/close_navbar_icon.png");

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
      hideNavBarLi('./src/img/menu_navbar_icon.png');
    }, 300);
      
    } else {
      changeIconMenu('./src/img/menu_navbar_icon.png');
      navBar.className = navBar.className + " hidden";
      setTimeout(() => {
        navBar.className = "nav-ul";
      }, 500);
    }
  }
)