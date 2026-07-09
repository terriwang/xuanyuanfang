// header scroll state
const header = document.getElementById('siteHeader');
if(header){
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });
}

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    header.classList.toggle('menu-open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      header.classList.remove('menu-open');
    });
  });
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold:0.15 });
revealEls.forEach(el => io.observe(el));
