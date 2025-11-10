'use strict';

// const { act } = require('react');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting Elements
// console.log(document.documentElement);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// before method will insert a message before the header element, so as sibling.
// header.before(message);
// console.log(allSections);
// console.log(header);

// Just document here is not enough to select the document element because this is not the real DOM element.
// So, for example, if we want to apply CSS styles to the entire page, we always need to select document element.

/** 
console.log(document.documentElement);

console.log(document.head);
console.log(document.body);
// For these special elements we don't even need to write any selector.

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
*/

// Creating And Inserting Elements
// .insertAdjacentHTML
/** 
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('header');
// header.prepend(message);  // First Child of Header
// header.append(message);  // Last Child of Header

// prepend and append can also be used to move the element

// header.append(message.cloneNode(true));

// header.before(message);
// after method will insert the message element after the header element, so as sibling.
header.after(message);

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message);
    message.remove();
  });
*/

// Styles, Attributes, And Classes

// Styles
/** 
header.append(message);
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height);
*/
// CSS Custom Prooerty
// A CSS custom property is avariable definedin CSS that stores a value (like a color, size, or font)
// They always start with -- (two dashes)
// You use them with var() function

// documentElement is the root where properties are defined in CSS

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// Attributes in HTML are like little modifiers that give extra meaning or behavior to elements.
// Attributes provide additional information about an HTML element.
/** 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-Standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const hashLink = document.querySelector('.nav__link--btn');
console.log(hashLink.href);
console.log(hashLink.getAttribute('href'));

message.remove();

// Data Attributes
console.log(logo.dataset.versionNumber);
*/
// Classes

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// Don't use, as it will override all the classes
// logo.className = 'jonas';

// Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// We need to start by adding an event listener to the button
// In the first way, we need to first get the coordinates of the element that we want to scroll to.
//
/** 
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
});
*/

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Types of Events and Event Handlers
// An event is basically a signal that is generated by a certain DOM node.
// A signal means that something has happened, for example, a click somewhere or the mouse moving,
// or the user triggering the full screen mode and really anything of importance, that happens on webpage, generates an event.

const h1 = document.querySelector('h1');
/** 
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // Removing Event Listener
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/
// Event Propagation: Bubbling And Capturing

// Event Propagation In Practice

// rgb(255,255,255)
/** 
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop Propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
  }
  // true
);
*/
// Event Delegation: Implementing Page Navigation

/** 
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
// The Problem Is That This Code Is Not Really Efficient
// We are adding here the exact same callback function (Event Handler)
// We are adding it once to each of these three elements
// So the exact same function is now attached to these three elements
// If we were to attach an event handler to 10,000 elements like this, then we would be creating 10,000 copies of the same function here.
// That would then certainly impact the performance

*/

// Better Solution Is To Use Events Delegation
// We use the fact that events bubble up.
// We do that by putting the EventListener on a comman parent of all the elements that we are interested in.

// 1. Add Event Listener To Common Parent Element
// 2. Determine What Element Originated The Event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Now we need a matching strategy here in order to match only the elements that we are actually interested in now.
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM Traversing
// DOM traversing is basically walking through the DOM.
// Which means that we can select an element based on another element.
// Sometimes we need to select elements relative to a certain other element.
// For example, a direct child or a direct parent element.
// Or sometimes we don't even know the structure of the DOM at runtime.
// In all these cases we need DOM traversing.

// const h1 = document.querySelector('h1');

// Going Downwards: Selecting Child
/** 
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes); // Direct Children

console.log(h1.children); // HTMLCollection

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards: Selecting Parent

console.log(h1.parentNode); // Direct Parent
console.log(h1.parentElement);

// Most of the time we actually need a parent element which is not a direct parent.
// In other words, we might need to find a parent element no matter how far away it is in the DOM tree.
// For that, we have the 'closest' method.

h1.closest('.header').style.background = 'var(--gradient-secondary)';

// We can think of 'closest' here as being the opposite of 'querySelector'.
// Both receive a query string as an input but 'querySelector' finds children, no matter how deep in the DOM tree.
// While the 'closest' method finds parents, no matter how far up in the DOM tree.

h1.closest('h1').style.background = 'var(--gradient-primary)';
*/
// Going Sideways: Selecting Sibling
// For some reason in JavaScript, we can only access direct siblings, so only the previous and the next one.
/** 
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // Moving up in the DOM to get all the Children

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
// Building A Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target;
  // When we are clicking on the numbers (01, 02, and 03) we are not actually clicking on the button, instead we are clicking the span element

  // console.log(clicked);

  // When we click any of these tab, we actually need the button element itself
  // Because from that button we will need to read the data tab attribute, that contains the tab number
  // Here this data attribute becomes important to store information in the DOM.
  // So basically we need a way of finding the button element whenever we click on the 'span' element
  // Way 1: Do some DOM traversing and simply select the parent element.
  // We can move up the DOM tree and instead of simply taking 'e.target' we can use the parent element of that.
  // const clicked = e.target.parentElement;
  // console.log(clicked);
  // Now when we click on the numbers (01, 02, and 03) we get the button because it is the parent element of span.
  // Now the problem appears when we click on the button itself, because now we will also get the parent of the button element i.e. container.
  // What we want is to get the button, no matter if we click on the 'span' or on the button itself.
  // So we need a way of selecting the parent element that is always a tab.
  // Way 2: Closest Method
  // This method makes it easy for us to dynamically get the element that we are interested in.
  // Instead of always selecting the parent element we will search for the closest operations tab.
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // clicked.classList.add('operations__tab--active');

  // When we click on the tabs container itself, so outside of any of the buttons, but still in the tabs container, we get null.
  // That's because null is the result of the closest method here when there is no matching parent element to be found.
  // So when we click in the tabs container, there is no parent with the class '.operations__tab'.
  // Solution: We need to ignore any clicks that happen on that area.
  // So ignore any clicks where the result is then null.
  // Guard Clause
  if (!clicked) return;

  // removing 'active'
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Activate Tab
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade Animation

const handleHover = function (e) {
  // console.log(this);
  // The 'this' keyword is equal to current target.
  // That is the element on which the event listener is attached to.
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img'); // This selector here is simply for any image which has the image tag

    // Now we have all our elements selected, we just need to change the opacity.
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');

// 'mouseover' is similar to 'mouseenter', with the big difference that 'mouseenter' does not bubble.
// We need the event to actually bubble so that it can even reach the navigation element.
/** 
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
*/

// The bind method creates a copy of the function that it's called on.
// It will set the 'this' keyword in this function call to whatever value that we pass into the 'bind'
// Passing the 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// There are also kind of opposite events of mouseover and mouseenter.
// We use these to undo what we do on the hover.
// The opposite of mouseenter is mouseleave and the opposite of the mouseover is mouseout.

// Implementing A Sticky Navigation: The Scroll Event
// We make the navigation sticky basically by adding the 'sticky' class whenever we reach a certain position.
// In CSS, this sticky class set the position to 'fixed'.
// It also changes the background color to transparent.

// Sticky Navigation
/** 
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

// Scroll event fires each time the webpage is scrolled.
// Using the scroll event for performing a certain action at a certain position of the page is not the way to go.
// So the scroll event is not really efficient and it should be avoided.
window.addEventListener('scroll', function (e) {
  // console.log(e);
  // console.log(window.scrollY);

  // When exactly should the navigation actually become sticky?
// It should happen as soon as we reach the first section.
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

// Sticky Navigation Using The Intersection Observer API
// This API allows our code to basically observe changes to the way that a certain target element intersects another element
// or the way it intersects the viewport.

// How the Intersection Observer API works?
/** 
// Callback function
const obsCallback = function (entries, observer) {
  // This callback function will get called each time that the observed element (target element) is intersecting the root element at the threshold.
  // In the current example, whenever the first section (target element) is intersecting the viewport (root) at 10%, then this function will get called
  // That's no matter if we are scrolling up or down.
  // This function will get called with two arguments i.e. 'entries' and observer object itself
  // 'entries' here is an array of the threshold entries.

  entries.forEach(entry => {
    console.log(entry);
  });
};

// Options
const obsOptions = {
  root: null, // 'root' is the element that the target is intersecting | null means the viewport is the root
  // root element will be the element that we want our target element (section1) to intersect

  // threshold: 0.1, // Threshold is the percentage of intersection at which the observer callback will be called.
  // callback triggers when 10% of the element is visible

  // threshold: [0, 1, 0.2],
  // If you set multiple thresholds (like [0, 0.25, 0.5, 1]), the callback fires whenever the intersectionRatio crosses one of those values.
  threshold: [0, 0.2],
  // 0% here means that basically our callback will trigger each time that the target element moves completely out of the view
  // and also as soon as it enters the view
  // That's because the callback function will be called when the threshold is passed while moving into the view and out of the view.
  // If we specified 1 here, then that means that the callback will only be called when 100% of the target is actually visible in the viewport.
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
// const header = document.querySelector('.header')

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // When 0% of the header is visible, then we want something to happen
  rootMargin: `-${navHeight}px`, // This means, shrink the root’s bounding box by 90px from all sides (top, right, bottom, left).
  // So the effective intersection area is smaller than the actual viewport.
});
headerObserver.observe(header);

// Revealing Elements On Scroll
/** 
// const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  // Logic
  const [entry] = entries; // Destructuring
  // console.log(entry);
  console.log(entries);
  // Instead of destructuring here (taking out the first element of the array and then remove the hidden section)
  // Let us use the fact that in the beginning, all of the elements are observed.
  // So we can simply loop over this array and then just run the below code for all the IntersectionObserver entries.

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // As we keep scrolling, the observer keeps observing the sections
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // The section will only revealed when it is 15% visible
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// There is a bug that appears when the user relodes the page while being between the two sections.
// If we reload the page here, then we will notice that the sections haven't being loaded yet.
// These sections here are hidden in the beginning when we first load the page.
// That is because we did hide them in the beginning and the revealSection function will not make them visible at load time in our current solution.
// Fix:
// The IntersectionObserver will observe all of the observed elements that it has been set up on in the very beginning when the DOM first loads.
// This means that all sections will be observed at the beginning
*/

// Revealing Elements On Scroll: Better Solution
const revealSection = function (entries, observer) {
  // Logic
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    // As we keep scrolling, the observer keeps observing the sections
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // The section will only revealed when it is 15% visible
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
// One of the most important things when building any website is performance.
// Images have the biggest impact on page loading.
// So it's very important that images are optimized on any page.
// For that, we can use a strategy called Lazy Loading Images.
// Instead of loading all images at once when the page loads, you load them only when they are about to enter the viewport.
// HTML Setup: We use a placeholder image first and store the real image in a data-src attribute.

const imgTargets = document.querySelectorAll('img[data-src]'); // Select all the images having 'data-src' property

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // What is load event?
  // The load event is fired when a resource (or the entire page) has been fully loaded, including all dependent resources
  // like images, stylesheets, iframes, and scripts.

  // Remove the lazy image class only when it is fully loaded behind the scenes
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // We do not want our users to notice that we are lazy loading the images.
  // So all this should happen in the background without our user noticing that.
  // So we should make these images load a bit earlier.
  // To do that, we can specify a negative root margin
  rootMargin: '200px',
});

// Attach image observer to all the targets
imgTargets.forEach(img => imgObserver.observe(img));

// Building A Slider Component: Part 1

// Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overflow = 'visible';
  // // Putting all the slides Side By Side
  // // 0% | 100% | 200% | 300%
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Which Slide Is Currently Active: Highlight Dot

  const activateDot = function (slide) {
    // Select All Dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };

  // Next Slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    // -100% | 0% | 100% | 200%
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Building a Slider Component: Part 2

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

slider();

// Lifecycle DOM Events
// DOM lifecycle is a sequence of stages the Document Object Model (DOM) goes through from the moment a web page starts loading
// until the user interacts with it, and eventually when it's unloaded.

// Stages In The DOM Lifecycle

// 1. Parsing And DOM Construction
// - The browser reads the HTML file from top to bottom
// - As it parses HTML, it builds the DOM tree (a tree structure of elements, attributes, and text nodes)
// - If it encounters external resources:
// - CSS -> blocks rendering until styles are downloaded and parsed.
// - JS scripts -> by default block HTML parsing until the script is fetched and executed (unless defer or async are used).
// JavaScript Execution Depends On Placement
// - If JavaScript is in the <head> or early in the <body> without async or defer, it pauses HTML parsing to execute the script.
// - If JavaScript is loaded with defer, it waits until the HTML is fully parsed.
// - If loaded with async, it runs as soon as it's downloaded - possibly before or after HTML parsing finishes.

// 2. DOMContentLoaded
// - Event: DOMContentLoaded fires when the HTML is fully parsed, and the DOM tree is built.
// - CSS typically loads before JavaScript because CSS is needed to style the page as it's being built,
// while JavaScript often adds interactivity after the structure is ready.
// - CSS is non-blocking for DOM manipulation: browsers allow JavaScript to modify the DOM even if stylesheets are still loading.
// - But... Layout And Rendering May Be Incomplete: If JavaScript reads computed styles or dimensions (getComputedStyle, offsetHeight, etc)
// results may be inaccurate untill CSS is fully applied
// When we put the script tag at the end (just before </body>) then we do not need to listen for the DOMContentLoaded

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// 3. Complete Loading (Load Event)
// - Event: load fires when:
// - The DOM is ready
// - All external resources (images, stylesheets, iframes, fonts) are fully loaded
// - Typically used for scripts that depend on images or external assets

window.addEventListener('load', function (e) {
  console.log('Page Fully Loaded', e);
});

// 4. User Interaction phase
// - At this point the page is interactive:
// - users can click buttons, scroll, input text, etc
// - JavScript can listen to events and dynamically update the DOM

// 5. Before Unload / Unload
// - beforeunload -> fired before the user leaves or reloads the page (can show confirmation dialogs)
// - unload -> fired when the page is being unloaded

/** 
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/

// Efficient Script Loading: Defer And Async

// defer and async are the atrributes that control how JavaScript files are loaded and executed in an HTML document
// Normally when the browser encounters a <script> tag, it pauses HTML parsing, downloads the script, executes it, and then resumes parsing.
// This can block page rendering.
// To avoid blocking, we can use defer or async.

// 1. defer
// - Script is downloaded in parallel with HTML parsing
// - Execution is deferred until after the HTML is fully parsed (DOMContentLoaded)
// - Scripts maintain their execution order
// - Good for scripts that rely on DOM being ready.
// Example:
// <script src="script.js" defer></script>

// Browser parses HTML while downloading script.js
// Executes script.js only after parsing is complete
// Great for most modern scripts.

// 2. async
// - Script is downloaded in parallel with HTML parsing
// - Execution happens as soon as the script is ready (No waiting for DOM)
// - Scripts may execute out of order
// - Good for independent scripts (e.g. Analytics, Ads, Tracking).
// Example:
// <script src="analytics.js" async></script>

// - Browser may pause HTML parsing to execute analytics.js immediately after download
// - Does not wait for DOM parsing or other scripts

// Rule Of Thumb
// - Use defer for your application scripts.
// - Use async for third-party or non essential scripts.

// NodeList vs. HTMLCollection
/** 
let nodeList = document.querySelectorAll('li');
console.log(nodeList.length);
document.querySelector('ul').appendChild(document.createElement('li'));
console.log(nodeList.length);
console.log(nodeList);
let htmlCollection = document.getElementsByTagName('li');
console.log(htmlCollection);
console.log(htmlCollection.length);
document.querySelector('ul').appendChild(document.createElement('li'));
console.log(htmlCollection.length);
*/
