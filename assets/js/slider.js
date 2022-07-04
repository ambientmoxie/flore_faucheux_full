const sculptures = document.getElementsByClassName("keen-slider__slide");

let slider = new KeenSlider("#artwork-slider", {
  breakpoints: {
    "(min-width: 400px)": {
      slides: { perView: 4, spacing: 10 },
    },
  },
  slides: { perView: 1 },
});

// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   slider = new KeenSlider("#artwork-slider", {
//     breakpoints: {
//       "(min-width: 400px)": {
//         slides: { perView: 4, spacing: 5 },
//       },
//       "(min-width: 1000px)": {
//         slides: { perView: 4, spacing: 10 },
//       },
//     },
//     slides: { perView: 1 },
//   });
// } else {
//   slider = new KeenSlider("#artwork-slider", {
//     breakpoints: {
//       "(min-width: 400px)": {
//         slides: { perView: 4, spacing: 5 },
//       },
//       "(min-width: 1000px)": {
//         slides: { perView: 4, spacing: 10 },
//       },
//     },
//     slides: { perView: 1 },
//   });
// }


for (let index = 0; index < sculptures.length; index++) {
  sculptures[index].addEventListener("mouseenter", e => {
    let currentEl = e.target;
    let currentElChild = currentEl.firstChild;
    // const sizeInfo = document.createElement("div");
    // sizeInfo.id = "size-info";

    // let artworkSizing = currentElChild.dataset.size;
    // const sizeInfoTxt = document.createElement("p");
    // sizeInfoTxt.innerHTML = artworkSizing;
    // currentElChild.style.mixBlendMode = "normal";

    // currentEl.appendChild(sizeInfo);
    // sizeInfo.appendChild(sizeInfoTxt);
  });
  sculptures[index].addEventListener("mouseleave", e => {
    let currentEl = e.target;
    let currentElChild = currentEl.firstChild;
    // const lastEl = document.getElementById("size-info");
    // lastEl.remove();
    //currentElChild.style.mixBlendMode = "multiply";
  });
}
