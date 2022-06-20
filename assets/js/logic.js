const headers = document.getElementsByTagName("h1");

for (let index = 0; index < headers.length; index++) {
  const parent = headers[index].parentElement;
  const article = headers[index].nextElementSibling;

  headers[index].addEventListener("mouseenter", () => {
    article.style.maxHeight = "10px";
  });

  headers[index].addEventListener("mouseleave", () => {
    article.style.maxHeight = "0";
  });
}
