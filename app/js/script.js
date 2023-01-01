console.log("HELLO")

const headerBtn = document.querySelectorAll("#btn");
const headerDropdown = document.querySelectorAll(".dropdown");
const headerArrow = document.querySelectorAll("#arrow");

const mobileMenu = document.getElementById("mobileMenu");
const mobileBtn = document.getElementById("mobileBtn");
const mobileNavContainer = document.querySelectorAll("#mobileNavContainer");

//DESKTOP HEADER NAV
const toggleDropdown = (counter) => {
  const ariaExpanded = headerArrow[counter].getAttribute("aria-expanded")

  headerDropdown[counter].classList.toggle("show");

  if (ariaExpanded === "false") {
    headerArrow[counter].setAttribute("aria-expanded", "true");
    headerBtn[counter].setAttribute("aria-expanded", "true");
  } else {
    headerArrow[counter].setAttribute("aria-expanded", "false");
    headerBtn[counter].setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", () => {
  for (let i = 0; i < headerBtn.length; i++) {
    if (headerDropdown[i].classList.contains("show")) {
      toggleDropdown(i);
    }
  }
})

for (let i = 0; i < headerBtn.length; i++) {
  headerBtn[i].addEventListener("click", (e) => {
    e.stopPropagation();

    for (let j = 0; j < headerBtn.length; j++) {
      if (j !== i && headerDropdown[j].classList.contains("show")) {
        toggleDropdown(j);
      }
    }

    toggleDropdown(i);
  });
}


//MOBILE HAMBURGUER MENU

//Mobile menu
mobileBtn.addEventListener("click", () => {
  const mobileMenuOpen = mobileMenu.getAttribute("menu-open");

  if (mobileMenuOpen === "false") {
    mobileMenu.setAttribute("menu-open", "true")
  } else {
    mobileMenu.setAttribute("menu-open", "false")
  }
})


//Accordion
for(let i = 0; i < mobileNavContainer.length; i++) {
  mobileNavContainer[i].addEventListener("click" , () => {
    const ariaExpanded = mobileNavContainer[i].getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      mobileNavContainer[i].setAttribute("aria-expanded", "true");
      mobileNavContainer[i].setAttribute("aria-expanded", "true");
    } else {
      mobileNavContainer[i].setAttribute("aria-expanded", "false");
      mobileNavContainer[i].setAttribute("aria-expanded", "false");
    }
  })
}