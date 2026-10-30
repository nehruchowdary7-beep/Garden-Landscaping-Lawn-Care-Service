(() => {
  'use strict';
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  let currentTheme = null;

  try {
    const storedTheme = localStorage.getItem('verdant-theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      currentTheme = storedTheme;
    }
    const storedDir = localStorage.getItem('verdant-dir');
    root.dir = storedDir === 'rtl' ? 'rtl' : 'ltr';
  } catch (e) {
    root.dir = 'ltr';
  }

  root.dataset.theme = currentTheme || (systemPrefersDark.matches ? 'dark' : 'light');

  const icons = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    moon: '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'
  };

  function updateControls() {
    const isDark = root.dataset.theme === 'dark';
    const isRtl = root.dir === 'rtl';

    document.querySelectorAll('.theme-control').forEach(button => {
      button.innerHTML = `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[isDark ? 'sun' : 'moon']}</svg>`;
      button.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', button.title);
      button.setAttribute('aria-pressed', String(isDark));
    });

    document.querySelectorAll('.direction-control').forEach(button => {
      button.innerHTML = `<span class="dir-text">${isRtl ? 'LTR' : 'RTL'}</span>`;
      button.title = isRtl ? 'Click to change to LTR' : 'Click to change to RTL';
      button.setAttribute('aria-label', button.title);
      button.setAttribute('aria-pressed', String(isRtl));
    });

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = isDark ? '#0b1610' : '#1b4d3e';
    }
  }

  function bindControls() {
    updateControls();
    document.querySelectorAll('.theme-control').forEach(button => {
      button.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = nextTheme;
        try {
          localStorage.setItem('verdant-theme', nextTheme);
        } catch (e) {}
        updateControls();
      });
    });

    document.querySelectorAll('.direction-control').forEach(button => {
      button.addEventListener('click', () => {
        const nextDir = root.dir === 'rtl' ? 'ltr' : 'rtl';
        root.dir = nextDir;
        try {
          localStorage.setItem('verdant-dir', nextDir);
        } catch (e) {}
        updateControls();
        window.dispatchEvent(new CustomEvent('directionchange', { detail: { dir: nextDir } }));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindControls);
  } else {
    bindControls();
  }

  systemPrefersDark.addEventListener('change', event => {
    try {
      if (!localStorage.getItem('verdant-theme')) {
        root.dataset.theme = event.matches ? 'dark' : 'light';
        updateControls();
      }
    } catch (e) {}
  });
})();
