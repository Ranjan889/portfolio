// ==========================================
// 1. MOBILE MENU TOGGLE FUNCTIONALITY
// ==========================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  
  // Switch between hamburger bars and close cross icon
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close mobile menu automatically when clicking any navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});

// ==========================================
// 2. BRAND LOGO CLICK SMOOTH SCROLL TO TOP
// ==========================================
const brandLogo = document.querySelector('.brand');
brandLogo?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==========================================
// 3. BROWSER SCROLL RESTORATION FIX (REFRESH)
// ==========================================
// Disables automatic browser scroll retention on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensure scroll resets to top before unloading/refreshing
window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});

// Double check scroll position on window load
window.onload = function () {
  window.scrollTo(0, 0);
};

// Clear URL hashes on load and force top alignment
if (window.location.hash) {
  window.history.replaceState('', document.title, window.location.pathname);
  window.scrollTo(0, 0);
}