const headers = document.getElementsByTagName("h1");

// HOVER

for (let index = 0; index < headers.length - 2; index++) {
  const parent = headers[index].parentElement;
  const article = headers[index].nextElementSibling;

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

// ACCORDION

for (let index = 0; index < headers.length; index++) {
  headers[index].addEventListener("click", openCurrAccordion);
}

function openCurrAccordion(e) {
  for (let i = 0; i < headers.length-1; i++) {
    const parent = headers[i].parentElement;
    const article = headers[i].nextElementSibling;
    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }
}

// Check if on mobile device or not 

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementById("naming").innerHTML = "F.FAUCHEUX";
}

document.getElementById("naming").addEventListener('click', () => {
  window.location.reload();
})

