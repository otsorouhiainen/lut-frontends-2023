
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
