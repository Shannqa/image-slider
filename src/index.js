import css from './styles.css';

import imagesrc0 from './assets/alex-azabache-V83v-MYB_Z8-unsplash.jpg';
import imagesrc1 from './assets/ian-dooley-DuBNA1QMpPA-unsplash.jpg';
import imagesrc2 from './assets/johan-mouchet-Z95viY3WaZs-unsplash.jpg';
import imagesrc3 from './assets/kari-shea-eMzblc6JmXM-unsplash.jpg';
import imagesrc4 from './assets/manuel-meurisse-EuCll-F5atI-unsplash.jpg';
import imagesrc5 from './assets/milan-popovic-sw1AJnAlZ70-unsplash.jpg';
import imagesrc6 from './assets/pedro-lastra-F0dmGPe2KG0-unsplash.jpg';
import imagesrc7 from './assets/peter-conlan-LEgwEaBVGMo-unsplash.jpg';
import arrownextsrc from './navigate_next_black_24dp.svg';
import arrowprevioussrc from './navigate_before_black_24dp.svg';
import circleoutlinesrc from './panorama_fish_eye_black_18dp.svg';
import circlefullsrc from './lens_black_24dp.svg';

let currentSlide = 0;

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

    const body = document.querySelector("body");
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

function createDom() {
    const body = document.querySelector("body");
    const main = document.createElement("div");
    const container = document.createElement("div");
    const frame = document.createElement("div");
    main.classList.add("main");
    container.classList.add("container");
    frame.classList.add("frame");

    //navigation
    const arrowNext = new Image();
    const arrowPrevious = new Image();
    arrowNext.src = arrownextsrc;
    arrowPrevious.src = arrowprevioussrc;

    arrowNext.addEventListener("click", () => {
       showSlide(currentSlide + 1, "next");  
    });

    arrowPrevious.addEventListener("click", () => {
        showSlide(currentSlide - 1, "previous");  
     });


    body.appendChild(main);
    main.appendChild(arrowPrevious);
    main.appendChild(frame);
    main.appendChild(arrowNext);
    frame.appendChild(container);

    createImages();

    //show slide
    container.childNodes[currentSlide].style.display = "block";
}

function showSlide(n, action) {
    const container = document.querySelector(".container");
    switch (action) {
        case "next":
            if (n > 7 ) {
                return;
            } else {
                container.childNodes[n-1].style.display = "none";
                currentSlide = n;
                container.childNodes[currentSlide].style.display = "block";
            } 
        break;
        case "previous":
            if (n < 1) {
                return;
            } else {
            container.childNodes[n + 1].style.display = "none";
            currentSlide = n;
            container.childNodes[currentSlide].style.display = "block";
            }
        break;
    }

}




createDom();
showSlide(0)



/* Photo by <a href="https://unsplash.com/@manuelmeurisse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Manuel Meurisse</a> on <a href="https://unsplash.com/photos/EuCll-F5atI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@itsmiki5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Milan Popovic</a> on <a href="https://unsplash.com/photos/sw1AJnAlZ70?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@peterlaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pedro Lastra</a> on <a href="https://unsplash.com/photos/F0dmGPe2KG0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kari Shea</a> on <a href="https://unsplash.com/photos/eMzblc6JmXM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@alexazabache?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Azabache</a> on <a href="https://unsplash.com/photos/V83v-MYB_Z8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/photos/DuBNA1QMpPA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@peterconlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Peter Conlan</a> on <a href="https://unsplash.com/photos/LEgwEaBVGMo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@johanmouchet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johan Mouchet</a> on <a href="https://unsplash.com/photos/Z95viY3WaZs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  */