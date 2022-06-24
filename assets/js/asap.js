const asap = document.getElementById("asap");

asap.addEventListener('click', () => {
    const fullScreenAsap = document.createElement("div");
    fullScreenAsap.id = "fullScreenAsap";
    const fullScreenAsapImg = document.createElement("img");
    fullScreenAsapImg.src = "./assets/img/asap_full.jpg";
    document.body.insertBefore(fullScreenAsap, document.body.firstChild);
    fullScreenAsap.appendChild(fullScreenAsapImg);
    
    if (document.getElementById('fullScreenAsap')) {
        fullScreenAsap.addEventListener('click', () => {
            fullScreenAsap.remove();
        })
    }
})


