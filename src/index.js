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

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  let count = 0;
  const target = 100;
  const duration = 2000; // Durasi animasi dalam milidetik
  const interval = duration / target; // Interval waktu antara setiap increment
  let observer;

  function updateCounter() {
    if (count < target) {
      count++;
      counter.innerText = count;
      setTimeout(updateCounter, interval);
    } else {
      counter.innerText = "100+";
    }
  }

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.disconnect(); // Stop observing after the animation starts
      }
    });
  }

  observer = new IntersectionObserver(handleIntersection);
  observer.observe(document.querySelector('#clients'));
});



// Close navbar menu when a navbar link is clicked
const navbarLinks = document.querySelectorAll('.navbar-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

