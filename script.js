// Select the hero element
const hero = document.querySelector('#hero');

// Set the initial hero height to 100vh
hero.style.height = '100vh';

// Add an event listener to the window object to listen for scroll events
window.addEventListener('scroll', () => {
  // Calculate the scroll position
  const scrollPos = window.pageYOffset;

  // Calculate the new hero height based on the scroll position
  const heroHeight = 100 - scrollPos / 6;

  // Update the hero height
  hero.style.height = `${heroHeight}vh`;
});
