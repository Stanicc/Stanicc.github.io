//PORTFOLIO
const filterButton = document.querySelector("#filterButton").children;
const items = document.querySelector(".projects-item").children;
const moreImages = document.querySelector(".more-images")

fillWithDefaults()

function fillWithDefaults() {
  const types = ["bot", "plugin", "app"]
  let targetSize = 0

  moreImages.style.display = "none";
  for (let i = 0; i < types.length; i++) {
    const target = types[i]
    for (let k = 0; k < items.length; k++) {
      if (items[k].getAttribute("data-id") == target) {
        if (targetSize == 3) {
          items[k].style.display = "none";
        } else {
          items[k].style.display = "block";
          targetSize += 1
        }
      }
    }

    targetSize = 0
  }
}

for (let i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener("click", function () {
    for (let j = 0; j < filterButton.length; j++) {
      filterButton[j].classList.remove("active")
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target")
    if (target == "all") {
      fillWithDefaults()
      return
    }
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        switch (items[k].getAttribute("data-id")) {
          case "bot":
            document.querySelector(".more-images a").href = "https://imgur.com/a/Ku1YP22";
            moreImages.style.display = "block";
            break;
          case "plugin":
            document.querySelector(".more-images a").href = "https://imgur.com/a/h0yqBtI";
            moreImages.style.display = "block";
            break;
          default:
            moreImages.style.display = "none";
            break;  
        }

        items[k].style.display = "block";
      }
    }
  });
}

const lightbox = document.querySelector(".lightbox")
const lightboxImage = lightbox.querySelector("img")

lightbox.addEventListener("click", function () {
  if (event.target != lightboxImage) {
    lightbox.classList.remove("show")
    lightbox.classList.add("hide")
  }
});

const selected = document.querySelectorAll(".project-item")
selected.forEach(function (element) {
  element.querySelector(".card").addEventListener("click", function () {
    lightbox.classList.remove("hide")
    lightbox.classList.add("show")
    lightboxImage.src = element.querySelector("img").getAttribute("src")
  });
});

//CONTACT
const discordContact = document.querySelector(".discord-copy")
discordContact.addEventListener("click", function () {
  const discordUser = "!! ♡ Gabileti - 갑리에라 ♡ !!#0604"
  const body = document.querySelector('body')
  const textArea = document.createElement('textarea')

  body.appendChild(textArea)
  textArea.value = discordUser

  textArea.select()
  textArea.setSelectionRange(0, 99999)

  document.execCommand("copy")
  body.removeChild(textArea)
});

(function ($) {
  "use strict";

  $('.home-button-center a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      if (target.length) {
        var top_space = 10

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1, 'easeInOutExpo')
        return false
      }
    }
  });

});