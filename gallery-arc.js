<<<<<<< HEAD
(function () {
  function initFanDeck() {
    const stage = document.getElementById('arc-fandeck-stage');
    if (!stage) return;

    const cards = Array.from(stage.querySelectorAll('.arc-card'));
    const total = cards.length;
    if (total === 0) return;

    let activeIndex = 3;

    function getResponsiveParams() {
      const w = window.innerWidth;
      if (w < 400) {
        return { spreadX: 24, rotStep: 3.5, arcY: 4, scaleStep: 0.09, zStep: 16 };
      } else if (w < 600) {
        return { spreadX: 34, rotStep: 5, arcY: 7, scaleStep: 0.08, zStep: 24 };
      } else if (w < 992) {
        return { spreadX: 72, rotStep: 7.5, arcY: 14, scaleStep: 0.07, zStep: 35 };
      } else if (w < 1200) {
        return { spreadX: 96, rotStep: 8, arcY: 18, scaleStep: 0.06, zStep: 45 };
      } else {
        return { spreadX: 115, rotStep: 8.5, arcY: 20, scaleStep: 0.05, zStep: 55 };
      }
    }

    function updateDeck(centerIdx) {
      activeIndex = Math.max(0, Math.min(total - 1, centerIdx));
      const p = getResponsiveParams();

      cards.forEach((card, i) => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        const translateX = offset * p.spreadX;
        const translateY = Math.pow(offset, 2) * p.arcY;
        const rotateZ = offset * p.rotStep;
        const rotateY = -offset * 3.5;
        const scale = Math.max(0.72, 1 - absOffset * p.scaleStep);
        const translateZ = -absOffset * p.zStep;

        const zIndex = 40 - absOffset;
        card.style.zIndex = zIndex;

        if (i === activeIndex) {
          card.classList.add('active');

          card.style.transform = `translate3d(0px, -18px, 60px) rotateZ(0deg) rotateY(0deg) scale(1.08)`;
          card.style.opacity = '1';
          card.style.filter = 'none';
        } else {
          card.classList.remove('active');
          card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`;
          card.style.opacity = Math.max(0.48, 1 - absOffset * 0.16).toString();
          card.style.filter = absOffset > 1 ? `brightness(${Math.max(0.72, 1 - absOffset * 0.07)})` : 'none';
        }
      });
    }

    stage.addEventListener('click', function (e) {

      if (e.target.closest('.arc-card-btn')) return;

      const card = e.target.closest('.arc-card');
      if (!card) return;

      const idx = cards.indexOf(card);
      if (idx !== -1) {
        updateDeck(idx);
      }
    });

    let touchMoved = false;
    stage.addEventListener('touchstart', function () {
      touchMoved = false;
    }, { passive: true });

    stage.addEventListener('touchmove', function () {
      touchMoved = true;
    }, { passive: true });

    stage.addEventListener('touchend', function (e) {
      if (touchMoved) return;
      if (e.target.closest('.arc-card-btn')) return;

      const card = e.target.closest('.arc-card');
      if (!card) return;

      const idx = cards.indexOf(card);
      if (idx !== -1) {
        updateDeck(idx);
      }
    });

    const prevBtn = document.getElementById('arc-prev-btn');
    const nextBtn = document.getElementById('arc-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        const targetIdx = (activeIndex - 1 + total) % total;
        updateDeck(targetIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const targetIdx = (activeIndex + 1) % total;
        updateDeck(targetIdx);
      });
    }

    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        updateDeck(activeIndex - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && activeIndex < total - 1) {
        updateDeck(activeIndex + 1);
        e.preventDefault();
      }
    });

    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDeck(activeIndex);
      }, 100);
    });

    updateDeck(activeIndex);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFanDeck);
  } else {
    initFanDeck();
  }
})();
=======
﻿(function () {
  function initFanDeck() {
    const stage = document.getElementById('arc-fandeck-stage');
    if (!stage) return;

    const cards = Array.from(stage.querySelectorAll('.arc-card'));
    const total = cards.length;
    if (total === 0) return;

    let activeIndex = 3;

    function getResponsiveParams() {
      const w = window.innerWidth;
      if (w < 600) {
        return { spreadX: 42, rotStep: 6.5, arcY: 10, scaleStep: 0.08, zStep: 28 };
      } else if (w < 992) {
        return { spreadX: 72, rotStep: 7.5, arcY: 14, scaleStep: 0.07, zStep: 35 };
      } else if (w < 1200) {
        return { spreadX: 96, rotStep: 8, arcY: 18, scaleStep: 0.06, zStep: 45 };
      } else {
        return { spreadX: 115, rotStep: 8.5, arcY: 20, scaleStep: 0.05, zStep: 55 };
      }
    }

    function updateDeck(centerIdx) {
      activeIndex = Math.max(0, Math.min(total - 1, centerIdx));
      const p = getResponsiveParams();

      cards.forEach((card, i) => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        const translateX = offset * p.spreadX;
        const translateY = Math.pow(offset, 2) * p.arcY;
        const rotateZ = offset * p.rotStep;
        const rotateY = -offset * 3.5;
        const scale = Math.max(0.72, 1 - absOffset * p.scaleStep);
        const translateZ = -absOffset * p.zStep;

        const zIndex = 40 - absOffset;
        card.style.zIndex = zIndex;

        if (i === activeIndex) {
          card.classList.add('active');

          card.style.transform = `translate3d(0px, -18px, 60px) rotateZ(0deg) rotateY(0deg) scale(1.08)`;
          card.style.opacity = '1';
          card.style.filter = 'none';
        } else {
          card.classList.remove('active');
          card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`;
          card.style.opacity = Math.max(0.48, 1 - absOffset * 0.16).toString();
          card.style.filter = absOffset > 1 ? `brightness(${Math.max(0.72, 1 - absOffset * 0.07)})` : 'none';
        }
      });
    }

    stage.addEventListener('click', function (e) {

      if (e.target.closest('.arc-card-btn')) return;

      const card = e.target.closest('.arc-card');
      if (!card) return;

      const idx = cards.indexOf(card);
      if (idx !== -1) {
        updateDeck(idx);
      }
    });

    let touchMoved = false;
    stage.addEventListener('touchstart', function () {
      touchMoved = false;
    }, { passive: true });

    stage.addEventListener('touchmove', function () {
      touchMoved = true;
    }, { passive: true });

    stage.addEventListener('touchend', function (e) {
      if (touchMoved) return;
      if (e.target.closest('.arc-card-btn')) return;

      const card = e.target.closest('.arc-card');
      if (!card) return;

      const idx = cards.indexOf(card);
      if (idx !== -1) {
        updateDeck(idx);
      }
    });

    const prevBtn = document.getElementById('arc-prev-btn');
    const nextBtn = document.getElementById('arc-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        const targetIdx = (activeIndex - 1 + total) % total;
        updateDeck(targetIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const targetIdx = (activeIndex + 1) % total;
        updateDeck(targetIdx);
      });
    }

    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        updateDeck(activeIndex - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && activeIndex < total - 1) {
        updateDeck(activeIndex + 1);
        e.preventDefault();
      }
    });

    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDeck(activeIndex);
      }, 100);
    });

    updateDeck(activeIndex);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFanDeck);
  } else {
    initFanDeck();
  }
})();
>>>>>>> aab5d36bf9f4dda49b5e76039159195a1b7b8c27
