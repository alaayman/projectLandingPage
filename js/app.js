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

//function to build the nav
function createNavItems() {
  // declare a document fragment to hold the list items until the for loop ends
  const tempDocFragment = document.createDocumentFragment();

  for (let i = 0; i < allSections.length; i++) {
    const newListElement = document.createElement("li");
    const newLinkItem = document.createElement("a");
    newListElement.appendChild(newLinkItem);
    //set attributes of link item
    newLinkItem.classList.toggle("menu__link"); //add menu_link class
    newLinkItem.href = "#" + allSections[i].id; //add href destination
    newLinkItem.textContent = allSections[i].dataset.nav; //pull section name from the data attributes using dataset
    // populating the document fragment
    tempDocFragment.appendChild(newListElement);
  }
  //append the created items to the <ul> navbar element
  const navBar = document.getElementById("navbar__list");
  navBar.appendChild(tempDocFragment);
  //add eventListener to go to section
  navBar.addEventListener("click", clickedGoToAnchor);
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  for (const section of allSections) {
    const myPlace = section.getBoundingClientRect();
    const listItem = document.querySelector('a[href*="' + section.id + '"]');
    if (myPlace.top <= 200 && myPlace.top >= -400) {
      section.classList.add("your-active-class");
      listItem.classList.add("menu__link__active__class");
    } else {
      section.classList.remove("your-active-class");
      listItem.classList.remove("menu__link__active__class");
    }
    // test placement
    // console.log(section.id + "  " + myPlace.top + " T " + myPlace.bottom + " B " + section.classList);
  }
}
// Scroll to anchor ID using scrollTO event
function clickedGoToAnchor(event) {
  // to scroll to sections smoothly after being clicked , need to stop default Behavior first
  event.preventDefault();
  const dest = event.target.getAttribute("href");
  document.querySelector(dest).scrollIntoView({
    behavior: "smooth",
  });
}
/**
 * End Main Functions
 * Begin Events
 */
//start the magic and put the items in place
createNavItems();
window.addEventListener("scroll", addActiveClass);
