// ==========================================
// 1. MOBILE MENU TOGGLE FUNCTIONALITY
// ==========================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  
  // Switch between hamburger bars and cross icon
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close mobile menu automatically when clicking any nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    if (menuToggle) {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});

// ==========================================
// 2. BLOG CATEGORY FILTER FUNCTIONALITY
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    blogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ==========================================
// 3. REAL-TIME SEARCH BAR FUNCTIONALITY
// ==========================================
const searchInput = document.getElementById('searchInput');

searchInput?.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();

  blogCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const tag = card.querySelector('.blog-tag').textContent.toLowerCase();

    if (title.includes(searchTerm) || tag.includes(searchTerm)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});