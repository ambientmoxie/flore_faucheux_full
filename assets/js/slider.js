const sculptures = document.getElementsByClassName("keen-slider__slide");

const slider = new KeenSlider("#artwork-slider", {
  loop: true,
  mode: "free",
  slides: {
    perView: 4,
    spacing: 15,
  },
});

for (let index = 0; index < sculptures.length; index++) {
  sculptures[index].addEventListener("mouseenter", e => {
    let currentEl = e.target;
    let currentElChild = currentEl.firstChild;
    const sizeInfo = document.createElement("div");
    sizeInfo.id = "size-info";

    let artworkSizing = currentElChild.dataset.size;
    const sizeInfoTxt = document.createElement("p");
    sizeInfoTxt.innerHTML = artworkSizing;
    currentElChild.style.mixBlendMode = "normal";

    currentEl.appendChild(sizeInfo);
    sizeInfo.appendChild(sizeInfoTxt);
  });
  sculptures[index].addEventListener("mouseleave", e => {
    let currentEl = e.target;
    let currentElChild = currentEl.firstChild;
    const lastEl = document.getElementById("size-info");
    lastEl.remove();
    //currentElChild.style.mixBlendMode = "multiply";
  });
}
