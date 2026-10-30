document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  }, { passive: true });

  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.getElementById('main-nav');
  if (menuBtn && siteNav) {
    const hamburgerSvg = '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    const closeSvg = '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    menuBtn.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.innerHTML = isOpen ? closeSvg : hamburgerSvg;
    });
  }

  document.querySelectorAll('.nav-item-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const isOpen = dropdown.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      document.querySelectorAll('.nav-item-dropdown.is-open').forEach(d => {
        d.classList.remove('is-open');
        const t = d.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  const baContainer = document.querySelector('.ba-slider-container');
  if (baContainer) {
    const rangeInput = baContainer.querySelector('.ba-range-input');
    const beforeImgWrap = baContainer.querySelector('.ba-img-before');
    const handle = baContainer.querySelector('.ba-slider-handle');

    if (rangeInput && beforeImgWrap && handle) {
      const updateSlider = () => {
        const val = rangeInput.value;
        const isRtl = document.documentElement.dir === 'rtl';
        if (isRtl) {
          beforeImgWrap.style.width = `${100 - val}%`;
          handle.style.left = `${100 - val}%`;
        } else {
          beforeImgWrap.style.width = `${val}%`;
          handle.style.left = `${val}%`;
        }
      };

      rangeInput.addEventListener('input', updateSlider);
      window.addEventListener('directionchange', updateSlider);
      updateSlider();
    }
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach(i => {
          i.classList.remove('is-open');
          const t = i.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-target') || '0', 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = targetNum / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= targetNum) {
              el.textContent = `${prefix}${targetNum.toLocaleString()}${suffix}`;
              clearInterval(timer);
            } else {
              el.textContent = `${prefix}${Math.floor(count).toLocaleString()}${suffix}`;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(el => statsObserver.observe(el));
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      const nameField = contactForm.querySelector('#contact-name');
      const emailField = contactForm.querySelector('#contact-email');
      const phoneField = contactForm.querySelector('#contact-phone');
      const addressField = contactForm.querySelector('#contact-address');
      const messageField = contactForm.querySelector('#contact-message');

      if (nameField && !nameField.value.trim()) {
        window.FormValidator.showError(nameField, 'Please enter your name.');
        hasError = true;
      } else if (nameField) {
        window.FormValidator.clearError(nameField);
      }

      if (phoneField && !phoneField.value.trim()) {
        window.FormValidator.showError(phoneField, 'Please enter your phone number.');
        hasError = true;
      } else if (phoneField && !window.FormValidator.validatePhone(phoneField.value)) {
        window.FormValidator.showError(phoneField, 'Please enter a valid phone number.');
        hasError = true;
      } else if (phoneField) {
        window.FormValidator.clearError(phoneField);
      }

      if (emailField && !emailField.value.trim()) {
        window.FormValidator.showError(emailField, 'Please enter your email address.');
        hasError = true;
      } else if (emailField && !window.FormValidator.validateEmail(emailField.value)) {
        window.FormValidator.showError(emailField, 'Please enter a valid email address.');
        hasError = true;
      } else if (emailField) {
        window.FormValidator.clearError(emailField);
      }

      if (addressField && !addressField.value.trim()) {
        window.FormValidator.showError(addressField, 'Please enter your property address.');
        hasError = true;
      } else if (addressField) {
        window.FormValidator.clearError(addressField);
      }

      if (messageField && !messageField.value.trim()) {
        window.FormValidator.showError(messageField, 'Please enter your message.');
        hasError = true;
      } else if (messageField) {
        window.FormValidator.clearError(messageField);
      }

      if (hasError) return;

      const successNotice = document.getElementById('contact-success-notice');
      contactForm.style.display = 'none';
      if (successNotice) {
        successNotice.style.display = 'block';
        successNotice.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
