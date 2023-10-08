/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import css from "./styles.css";

import imagesrc0 from "./assets/alex-azabache-V83v-MYB_Z8-unsplash.jpg";
import imagesrc1 from "./assets/ian-dooley-DuBNA1QMpPA-unsplash.jpg";
import imagesrc2 from "./assets/johan-mouchet-Z95viY3WaZs-unsplash.jpg";
import imagesrc3 from "./assets/kari-shea-eMzblc6JmXM-unsplash.jpg";
import imagesrc4 from "./assets/manuel-meurisse-EuCll-F5atI-unsplash.jpg";
import imagesrc5 from "./assets/milan-popovic-sw1AJnAlZ70-unsplash.jpg";
import imagesrc6 from "./assets/pedro-lastra-F0dmGPe2KG0-unsplash.jpg";
import imagesrc7 from "./assets/peter-conlan-LEgwEaBVGMo-unsplash.jpg";
import arrownextsrc from "./navigate_next_black_24dp.svg";
import arrowprevioussrc from "./navigate_before_black_24dp.svg";

// eslint-disable-next-line prefer-const
let currentSlide = 0;
let slideTimeout;

function createImages() {
  const img0 = new Image();
  const img1 = new Image();
  const img2 = new Image();
  const img3 = new Image();
  const img4 = new Image();
  const img5 = new Image();
  const img6 = new Image();
  const img7 = new Image();
  img0.src = imagesrc0;
  img1.src = imagesrc1;
  img2.src = imagesrc2;
  img3.src = imagesrc3;
  img4.src = imagesrc4;
  img5.src = imagesrc5;
  img6.src = imagesrc6;
  img7.src = imagesrc7;

  const container = document.querySelector(".container");
  container.appendChild(img0);
  container.appendChild(img1);
  container.appendChild(img2);
  container.appendChild(img3);
  container.appendChild(img4);
  container.appendChild(img5);
  container.appendChild(img6);
  container.appendChild(img7);
}

function showSlide(action, id) {
  const container = document.querySelector(".container");
  const dotsDiv = document.querySelector(".dots-div");
  const imgNodes = container.childNodes;
  const dotNodes = dotsDiv.childNodes;
  const creditsDiv = document.querySelector(".credits-div");
  const creditsNodes = creditsDiv.childNodes;
  dotNodes[currentSlide].classList.remove("active");
  creditsNodes[currentSlide].classList.remove("visible");

  if (action === "next") {
    if (currentSlide === 7) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
  } else if (action === "previous") {
    if (currentSlide === 0) {
      currentSlide = 7;
    } else {
      currentSlide -= 1;
    }
  } else if (action === "show") {
    currentSlide = id;
  }
  imgNodes.forEach((img) => {
    img.style.transform = `translateX(${currentSlide * -100}%)`;
  });
  dotNodes[currentSlide].classList.add("active");
  creditsNodes[currentSlide].classList.add("visible");

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(showSlide, 10000, "next");
}

function createDom() {
  const body = document.querySelector("body");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const container = document.createElement("div");
  const frame = document.createElement("div");
  main.classList.add("main");
  header.classList.add("header");
  container.classList.add("container");
  frame.classList.add("frame");
  header.textContent = "Image Slider";

  // navigation - arrows
  const arrowNext = new Image();
  const arrowPrevious = new Image();
  arrowNext.src = arrownextsrc;
  arrowPrevious.src = arrowprevioussrc;
  arrowNext.classList.add("arrow");
  arrowPrevious.classList.add("arrow");

  arrowNext.addEventListener("click", () => {
    showSlide("next");
  });

  arrowPrevious.addEventListener("click", () => {
    showSlide("previous");
  });

  body.appendChild(header);
  body.appendChild(main);
  main.appendChild(arrowPrevious);
  main.appendChild(frame);
  main.appendChild(arrowNext);
  frame.appendChild(container);

  createImages();

  // navigation - dots
  const dotsDiv = document.createElement("div");
  dotsDiv.classList.add("dots-div");
  for (let i = 0; i < 8; i++) {
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("dot");
    dotSpan.addEventListener("click", () => showSlide("show", i));
    dotsDiv.appendChild(dotSpan);
  }
  body.appendChild(dotsDiv);

  // navigation - credits
  const creditsDiv = document.createElement("div");
  creditsDiv.classList.add("credits-div");

  const imgCredits = [
    [
      "Manuel Meurisse",
      "https://unsplash.com/@manuelmeurisse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Milan Popovic",
      "https://unsplash.com/@itsmiki5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Pedro Lastra",
      "https://unsplash.com/@peterlaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Kari Shea",
      "https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Alex Azabache",
      "https://unsplash.com/@alexazabache?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "ian dooley",
      "https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Peter Conlan",
      "https://unsplash.com/@peterconlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    [
      "Johan Mouchet",
      "https://unsplash.com/@johanmouchet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
  ];

  imgCredits.forEach((img, index) => {
    const creditsP = document.createElement("p");
    creditsP.dataset.id = index;
    creditsP.classList.add("credits-p");
    const creditsSpan1 = document.createElement("span");
    creditsSpan1.textContent = "Photo by ";
    const creditsA = document.createElement("a");
    creditsA.setAttribute("href", `${img[1]}`);
    creditsA.textContent = img[0];
    const creditsSpan2 = document.createElement("span");
    creditsSpan2.textContent = " on Unsplash.";
    creditsP.appendChild(creditsSpan1);
    creditsP.appendChild(creditsA);
    creditsP.appendChild(creditsSpan2);
    creditsDiv.appendChild(creditsP);
  });

  body.appendChild(creditsDiv);

  // footer
  const footer = document.createElement("div");
  const footerSpan = document.createElement("span");
  footerSpan.textContent = "Website created by ";
  const footerA = document.createElement("a");
  footerA.textContent = "Shannqa";
  footerA.setAttribute("href", "https://shannqa.github.io/homepage/index.html");
  footer.appendChild(footerSpan);
  footer.appendChild(footerA);
  body.appendChild(footer);
}

createDom();
showSlide("show", 0);
