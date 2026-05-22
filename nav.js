// ─── SHARED NAV JS ───
(function(){
  // Hamburger toggle
  const btn = document.getElementById('navHamburger');
  const menu = document.getElementById('navMobile');
  if(btn && menu){
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    });
    // close on link click
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }));
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if(reveals.length){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // Stagger grid children
  document.querySelectorAll('[data-stagger]').forEach(grid => {
    grid.querySelectorAll(':scope > *').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.07}s`;
    });
  });
})();
