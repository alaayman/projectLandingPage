/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 */
// declare allSections to hold the sections in the document
const allSections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function hideMe() {
  // To be called from setTimeout function
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createNavItems() {
  // declare a document fragment to hold the list items until the for loop ends
  const tempDocFragment = document.createDocumentFragment();
  //Begin the for loop until the sectin list length
  for (let i = 0; i < allSections.length; i++) {
    const newListElement = document.createElement("li"); // newListItems to hold the created element
    const newLinkItem = document.createElement("a"); // newLinkItems to hold the link
    newListElement.appendChild(newLinkItem);
    //set attribuets of link item
    newLinkItem.classList.toggle("menu__link"); //add menue_link class
    newLinkItem.href = "#" + allSections[i].id; //add href destination
    newLinkItem.textContent = allSections[i].dataset.nav; //pull the section name from the data attributes using dataset
    //
    tempDocFragment.appendChild(newListElement); // populating the document fragment
  }
  //append the created items to the <ul> navbar element
  const navBar = document.getElementById("navbar__list");
  navBar.appendChild(tempDocFragment);
  navBar.addEventListener("click", clickedGoToAnchor);
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  for (const section of allSections) {
    const myPlace = section.getBoundingClientRect();
    if (myPlace.top <= 200 && myPlace.top >= -436) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
    // console.log(section.id + "  " + myPlace.top + " T " + myPlace.bottom + " B " + section.classList);
  }
  console.log("haha ");
}
// Scroll to anchor ID using scrollTO event

function clickedGoToAnchor(event) {
  // to scroll to sections smoothely after being clicked , need to stop defaultBehavior first
  event.preventDefault();
  dest = event.target.getAttribute("href");
  document.querySelector(dest).scrollIntoView({
    behavior: "smooth",
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", addActiveClass);
// Build menu

// Set sections as active

//start the magic and put the items in place
createNavItems();
