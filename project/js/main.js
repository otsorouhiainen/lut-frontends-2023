const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');    
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');


// animation for the movie/series ranking pages
document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.add("appear"); // Add the "appear" class to each item with a delay
    }, 100 * index);
  });
});

// animation for the blog page cards
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.add("appear"); // Add the "appear" class to each item with a delay
    }, 200 * index);
  });
});

// for the home page animations
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.add("appear"); // Add the "appear" class to each item with a delay
    }, 200 * index);
  });
});

// for the title animations
document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll(".lg-heading, .sm-heading");
  headers.forEach(function(item, index) {
    setTimeout(function() {
      console.log(item)
      item.classList.add("appear"); // Add the "appear" class to each item with a delay
    }, 200 * index);
  });
});

//Set initial state of menu

// Set initial state as visible
let showMenu = true;

// Apply initial CSS classes for a visible menu
menuBtn.classList.add('close');
menu.classList.add('show');
menuNav.classList.add('show');
navItems.forEach(item => item.classList.add('show'));

// Add event listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // Check if the screen size is smaller than the medium breakpoint
  if (window.matchMedia('(max-width: 768px)').matches) {
    // Toggle the menu visibility
    if (showMenu) {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
    } else {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
    }

    // Update menu state
    showMenu = !showMenu;
  }
}