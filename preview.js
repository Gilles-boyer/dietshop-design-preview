(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches || !('IntersectionObserver' in window)) return;
  const items = document.querySelectorAll('.section-heading,.goal-card,.woocommerce ul.products > li.product,.ds-pack-card,.team-grid > *,.store-grid > *,.contact-grid > *');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('preview-visible');
    observer.unobserve(entry.target);
  }), {threshold: 0.08, rootMargin: '0px 0px 32px 0px'});
  items.forEach(item => { item.classList.add('preview-reveal'); observer.observe(item); });
})();