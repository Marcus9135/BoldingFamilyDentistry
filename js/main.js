/* ============================================================
   BOLDING FAMILY DENTISTRY — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scroll effect + Parallax ---------- */
  const header = document.querySelector('.site-header');
  const heroBg = document.querySelector('.hero__bg');

  const onScroll = () => {
    const scrollY = window.scrollY;

    // Header style
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }

    // Parallax: move hero bg image slower than scroll
    if (heroBg) {
      heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.header-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Mobile dropdown toggle
    nav.querySelectorAll('.header-nav__item').forEach(item => {
      const link = item.querySelector('.header-nav__link');
      const dropdown = item.querySelector('.header-dropdown');
      if (dropdown && link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('dropdown-open');
          }
        });
      }
    });

    // Close on link click
    nav.querySelectorAll('.header-dropdown a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggle.classList.remove('open');
          nav.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ---------- Accordion ---------- */
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all in same accordion
      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          openItem.querySelector('.accordion-body').style.maxHeight = null;
        });
      }

      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('.fade-up');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Contact form (basic client-side) ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  /* ---------- Active nav highlighting ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith('/' + currentPage))) {
      link.classList.add('active');
    }
  });

  /* ---------- Floating Action Buttons ---------- */
  const fab = document.createElement('div');
  fab.className = 'fab-container';
  fab.innerHTML = `
    <button class="fab-btn fab-btn--review" aria-label="Leave a Google Review">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <span>Leave a Review</span>
    </button>
    <a href="tel:9313882279" class="fab-btn fab-btn--book" aria-label="Book Appointment">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
      <span>Book Appointment</span>
    </a>
  `;
  document.body.appendChild(fab);

  // Review modal
  const modal = document.createElement('div');
  modal.className = 'review-modal';
  modal.innerHTML = `
    <div class="review-modal__backdrop"></div>
    <div class="review-modal__content">
      <button class="review-modal__close" aria-label="Close">&times;</button>
      <div class="review-modal__body">
        <div class="elfsight-app-4e497d75-cad0-4e36-81bf-8aa0bbb88193" data-elfsight-app-lazy></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Load Elfsight script once
  if (!document.querySelector('script[src*="elfsightcdn"]')) {
    const s = document.createElement('script');
    s.src = 'https://elfsightcdn.com/platform.js';
    s.async = true;
    document.body.appendChild(s);
  }

  const reviewBtn = fab.querySelector('.fab-btn--review');
  const modalClose = modal.querySelector('.review-modal__close');
  const modalBackdrop = modal.querySelector('.review-modal__backdrop');

  reviewBtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

});
