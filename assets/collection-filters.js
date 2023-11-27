const parent = document.querySelector(".collection--filters");
const detailsElements = parent.querySelectorAll("details");
detailsElements.forEach((detail) => {
  detail.addEventListener("click", function (e) {
    detailsElements.forEach( element => {
      if(element !== this){
        element.removeAttribute("open");
      }
    })
  });
});