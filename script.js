// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));

// Highlight current page in menu
const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
  if (a.dataset.page === page) a.classList.add('active');
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
});

// FAQ search
const search = document.getElementById('faq-search');
if (search) {
  search.addEventListener('input', () => {
    const term = search.value.toLowerCase().trim();
    let shown = 0;
    document.querySelectorAll('.faq-item').forEach(item => {
      const match = item.textContent.toLowerCase().includes(term);
      item.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    document.querySelectorAll('.faq-cat').forEach(cat => {
      const any = [...cat.querySelectorAll('.faq-item')].some(i => i.style.display !== 'none');
      cat.style.display = any ? '' : 'none';
    });
    document.querySelector('.no-results').style.display = shown ? 'none' : 'block';
  });
}

// Pre-select plan on contact page (contact.html?plan=Business)
const planSelect = document.getElementById('plan');
if (planSelect) {
  const plan = new URLSearchParams(location.search).get('plan');
  if (plan) planSelect.value = plan;
}

// Footer year
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
