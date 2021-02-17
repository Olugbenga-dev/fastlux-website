/*            ===  TABLE OF CONTENT  ===

      VARIETIES                            LINES
  Navigation Opacity -------------------- 12 - 19
  Text Appear Animations ---------------- 21 - 50
  Form Processing ----------------------- 52 - 109
  Product Sliding ----------------------- 136 - 206
  Testimonials Sliding ------------------ 208 - 278
  Footer Current Date ------------------- 279 - 289
*/

// ------------------Navigation Opacity
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    document.querySelector("#main-nav").style.opacity = 0.9;
  } else {
    document.querySelector("#main-nav").style.opacity = 1;
  }
});

// ------------------Text Appear Animations
// ------------Text Variables
const screenPosition = window.innerHeight / 1.3;

// ------------Service Intro
const serviceAppear = () => {
  let serviceIntro = document.querySelector(".service-intro");
  let servicePosition = serviceIntro.getBoundingClientRect().top;

  if (servicePosition < screenPosition) {
    serviceIntro.classList.add("service-intro-appear");
  }
};
window.addEventListener("scroll", serviceAppear);

// -----------About Intro
const aboutAppear = () => {
  let aboutIntro = document.querySelector(".info-intro");
  let aboutIntro2 = document.querySelector(".info-2-intro");
  let aboutPosition = aboutIntro.getBoundingClientRect().top;
  let aboutPosition2 = aboutIntro2.getBoundingClientRect().top;

  if (aboutPosition < screenPosition) {
    aboutIntro.classList.add("info-intro-appear");
  }
  if (aboutPosition2 < screenPosition) {
    aboutIntro2.classList.add("info-2-intro-appear");
  }
};
window.addEventListener("scroll", aboutAppear);

// ------------------Form Processing
const form = document.getElementById("form");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// ------ First: Form Validation, Second: Sending with Ajax
const processForm = () => {
  // -----Check For Name
  if (name.value.trim() == "" || name.value.trim() == null) {
    document.querySelector(".name-error").innerText = "Please enter your name!";
    return false;
  }

  if (
    name.value.trim() == "name" ||
    name.value.trim() == "Name" ||
    name.value.trim() == "No-name" ||
    name.value.trim() == "username" ||
    name.value.trim() == "Username"
  ) {
    document.querySelector(".name-error").innerText =
      "Error: Name input cannot be Name or Username!";
    return false;
  } else if (name.value.trim() != "" || name.value.trim() != null) {
    document.querySelector(".name-error").innerText = "";
  }

  // -----Check For Subject
  if (subject.value.trim() == "" || subject.value.trim() == null) {
    document.querySelector(".subject-error").innerText =
      "Please enter the subject!";
    return false;
  } else if (subject.value.trim() != "" || subject.value.trim() != null) {
    document.querySelector(".subject-error").innerText = "";
  }

  // -----Check For Email
  if (email.value == "" || email.value == null) {
    document.querySelector(".email-error").innerText =
      "Please enter your email!";
    return false;
  } else if (email.value.trim() != "" || email.value.trim() != null) {
    document.querySelector(".email-error").innerText = "";
  }

  // -----Check For Message
  if (message.value.trim() == "" || message.value.trim() == null) {
    document.querySelector(".message-error").innerText =
      "Please type in your message!";
    return false;
  } else if (message.value.trim() != "" || message.value.trim() != null) {
    document.querySelector(".message-error").innerText = "";
  } else {
    true;
  }
};

// form.addEventListener("onsubmit", (e) => {
//   return validForm();
// });

// ------------------Smooth Scroll Behavoir
// const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 700,
// });

// ------------------Smooth Scrolling Type 2
// $('#navbar a').on('click', function (event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top - 100
//       },
//       800
//     );
//   }
// });

// -------------------Product Sliding
// Product Variables
const slides = document.querySelectorAll(".product-slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 8000;
let slideInterval;

// ------Next Product Slide
const nextSlide = () => {
  // ------Get current class
  const current = document.querySelector(".current");
  // ------Remove current from class
  current.classList.remove("current");
  //   ------Check for next slide
  if (current.nextElementSibling) {
    // ------Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //   ------Add current to first class
    slides[0].classList.add("current");
    slidesTwo[0].classList.add(".current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// -------Previous Product Slides
const prevSlide = () => {
  // ------Get current class
  const current = document.querySelector(".current");
  // ------Remove current from class
  current.classList.remove("current");
  //   ------Check for previous slide
  if (current.previousElementSibling) {
    // ------Add current to previous sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //   ------Add current to last class
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// -------Buttons Event
next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
  }
});

prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
  }
});

// ------Auto slide
if (auto) {
  slideInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

// ----------Testimonials Sliding

// ------Testimonials Variables
const slidesTwo = document.querySelectorAll(".page");
const nextTwo = document.querySelector("#nextTwo");
const prevTwo = document.querySelector("#prevTwo");
const intervalTimeTwo = 7000;
let slideIntervalTwo;

// -------Next Testimonials Slides
const nextSlideTwo = () => {
  // ------Get present class
  const present = document.querySelector(".present");
  // ------Remove present from class
  present.classList.remove("present");
  //   ------Check for next slide
  if (present.nextElementSibling) {
    // ------Add present to next sibling
    present.nextElementSibling.classList.add("present");
  } else {
    //   ------Add present to first class
    slidesTwo[0].classList.add("present");
  }
  setTimeout(() => present.classList.remove("present"));
};

// -------Previous Testimonials Slides
const prevSlideTwo = () => {
  // ------Get present class
  const present = document.querySelector(".present");
  // ------Remove present from class
  present.classList.remove("present");
  //   ------Check for previous slide
  if (present.previousElementSibling) {
    // ------Add present to previous sibling
    present.previousElementSibling.classList.add("present");
  } else {
    //   ------Add present to last class
    slidesTwo[slidesTwo.length - 1].classList.add("present");
  }
  setTimeout(() => present.classList.remove("present"));
};

// ------Buttons Event
nextTwo.addEventListener("click", () => {
  nextSlideTwo();
  if (auto) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(() => {
      nextSlideTwo();
    }, intervalTimeTwo);
  }
});

prevTwo.addEventListener("click", () => {
  prevSlideTwo();
  if (auto) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(() => {
      nextSlideTwo();
    }, intervalTimeTwo);
  }
});

// ------Auto slide
if (auto) {
  slideIntervalTwo = setInterval(() => {
    nextSlideTwo();
  }, intervalTimeTwo);
}

// ----------Footer Current Date
let currentDate = document.querySelector(".current-date");

const setDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  currentDate.innerText = year;
};

window.addEventListener("onload", setDate());

// ----------Registering Service Worker

// Making sure service worker are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_pages.js")
      .then((reg) => console.log("Service worker: Register"))
      .catch((err) => console.log(`Service worker: Error: ${err}`));
  });
}
