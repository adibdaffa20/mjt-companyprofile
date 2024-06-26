import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Toggle navbar menu on button click
const menuButton = document.querySelector('.menu-button');
const navbarMenu = document.querySelector('.navbar-menu');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
  menuButton.setAttribute('aria-expanded', !expanded);
  navbarMenu.classList.toggle('open');
});

// Close navbar menu when a navbar link is clicked
const navbarLinks = document.querySelectorAll('.navbar-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

