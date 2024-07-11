"use strict";

const images = document.querySelectorAll(".image");
const imagesH = document.querySelectorAll(".image-h");
const showCase = document.querySelector(".show-case");
const showPic = document.querySelector(".show-pic");
const showPicH = document.querySelector(".show-pic-h");
const hideCont = document.querySelector(".hidden-modal-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");
const plus = document.querySelector(".plus");
const count = document.querySelector(".count");
const minus = document.querySelector(".minus");
const userPic = document.querySelector(".user-pics");
const userOrder = document.querySelector(".user-order");
const orderText = document.querySelector(".order-text");
const sliderImage = document.querySelectorAll(".slider-image");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const openMediaMenu = document.querySelector(".menu-image");
const closeMediaMenu = document.querySelector(".close-media-menu");
const mediaMenu = document.querySelector(".media-menu-container");
const addCart = document.querySelector(".add-cart");
const cart = document.querySelector(".cart");
const deleteBtn = document.querySelector(".delete");
const orderShow = document.querySelector(".order-show");
const empty = document.querySelector(".empty");

console.log(sliderNext);

let curSlide = 0;
let isClicked = false;

images.forEach((image, index) => {
  image.addEventListener("mouseenter", (e) => {
    showPic.src = image.src;
  });
});

showCase.addEventListener("click", () => {
  hideCont.style.display = "grid";
  imagesH.forEach((imageh) => {
    imageh.addEventListener("click", () => {
      showPicH.src = imageh.src;
    });
  });

  nextBtn.addEventListener("click", () => {
    curSlide = curSlide < imagesH.length - 1 ? curSlide + 1 : 0;
    showPicH.src = imagesH[curSlide].src;
    console.log("clicked");
  });

  prevBtn.addEventListener("click", () => {
    curSlide = curSlide > 0 ? curSlide - 1 : imagesH.length - 1;
    showPicH.src = imagesH[curSlide].src;
  });
});

closeBtn.addEventListener("click", () => {
  hideCont.style.display = "none";
  //  console.log("clicked");
});

plus.addEventListener("click", () => {
  count.textContent = Number(count.textContent) + 1;
});

minus.addEventListener("click", () => {
  count.textContent =
    Number(count.textContent) - 1 > 0 ? Number(count.textContent) - 1 : 0;
});

cart.addEventListener("click", () => {
  if (!isClicked) {
    userOrder.style.display = "block";
    isClicked = true;
  } else {
    userOrder.style.display = "none";
    isClicked = false;
  }
});

openMediaMenu.addEventListener("click", () => {
  mediaMenu.style.display = "block";
});

closeMediaMenu.addEventListener("click", () => {
  mediaMenu.style.display = "none";
});

const maxSlide = sliderImage.length;
console.log(maxSlide);

const goToSlides = () => {
  sliderImage.forEach((slide, i) => {
    slide.style.transform = `translateX(-${curSlide * 100}%)`;
  });
};

sliderNext.addEventListener("click", () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlides();
});

sliderPrev.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlides();
});

const handleAddtoCart = () => {
  const Number = +count.textContent;
  const total = (Number * 125.0).toFixed(2);
  console.log(total, Number);

  if (Number > 0) {
    empty.style.display = "none";
    orderShow.style.display = "block";
    const html = `<h4>$120.00 * ${Number} $${total}</h4>`;

    orderText.insertAdjacentHTML("beforeend", html);

    deleteBtn.addEventListener("click", () => {
      empty.style.display = "block";
      orderShow.style.display = "none";
    });
  } else return;
};

addCart.addEventListener("click", handleAddtoCart);
