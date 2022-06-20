const headers = document.getElementsByTagName("h1");

for (let index = 0; index < headers.length; index++) {
  const parent = headers[index].parentElement;
  const article = headers[index].nextElementSibling;

  headers[index].addEventListener("click", openCurrAccordion);

  headers[index].addEventListener("mouseenter", () => {
    if (!parent.classList.contains("open")) {
      article.style.maxHeight = "10px";
    }
  });
  headers[index].addEventListener("mouseleave", () => {
    if (!parent.classList.contains("open")) {
      article.style.maxHeight = "0";
    }
  });
}

function openCurrAccordion(e) {
  for (let i = 0; i < headers.length; i++) {
    // Récupère l'élément parent à h1, ici heading-section

    const parent = headers[i].parentElement;
    // Récupère l'élément voisin à h1, ici content-section
    const article = headers[i].nextElementSibling;
    // Séléctionne uniquement l'élément cliqué et applique la classe open à l'élément parent si il ne la contient pas déjà
    // alors lui rajouter la classe open
    // alors rajouter à content-section sa taille originel
    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }
}
