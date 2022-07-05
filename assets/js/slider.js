const sculptures = document.getElementsByClassName("keen-slider__slide");

let slider = new KeenSlider("#artwork-slider", {
  breakpoints: {
    "(min-width: 768px)": {
      slides: { perView: 2, spacing: 0 },
    },
    "(min-width: 1025px)": {
      slides: { perView: 3, spacing: 0 },
    },
    "(min-width: 1680px)": {
      slides: { perView: 4, spacing: 0 },
    },
    "(min-width: 1920px)": {
      slides: { perView: 5, spacing: 0 },
    }
  },
  slides: { perView: 1 },
});


for (let index = 0; index < sculptures.length; index++) {
  sculptures[index].addEventListener("mouseenter", e => {
    let currentEl = e.target;
    let currentElChild = currentEl.childNodes[1];
    console.log(currentElChild);
    const sizeInfo = document.createElement("div");
    sizeInfo.id = "size-info";

    let artworkSizing = currentElChild.dataset.size;
    const sizeInfoTxt = document.createElement("p");
    sizeInfoTxt.innerHTML = artworkSizing;
    // currentElChild.style.mixBlendMode = "normal";

    currentEl.appendChild(sizeInfo);
    sizeInfo.appendChild(sizeInfoTxt);
  });
  sculptures[index].addEventListener("mouseleave", e => {
    let currentEl = e.target;
    const lastEl = document.getElementById("size-info");
    lastEl.remove();
    // currentElChild.style.mixBlendMode = "multiply";
  });
}
