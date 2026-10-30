document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const monthlyBtn = document.getElementById('billing-monthly-btn');
  const annualBtn = document.getElementById('billing-annual-btn');

  const priceEssential = document.getElementById('price-val-essential');
  const priceSignature = document.getElementById('price-val-signature');
  const priceEstate = document.getElementById('price-val-estate');

  if (monthlyBtn && annualBtn) {
    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('active');
      annualBtn.classList.remove('active');

      if (priceEssential) priceEssential.innerHTML = '$99 <span>/month</span>';
      if (priceSignature) priceSignature.innerHTML = '$189 <span>/month</span>';
      if (priceEstate) priceEstate.innerHTML = '$349 <span>/month</span>';
    });

    annualBtn.addEventListener('click', () => {
      annualBtn.classList.add('active');
      monthlyBtn.classList.remove('active');

      if (priceEssential) priceEssential.innerHTML = '$84 <span>/month (billed annually)</span>';
      if (priceSignature) priceSignature.innerHTML = '$159 <span>/month (billed annually)</span>';
      if (priceEstate) priceEstate.innerHTML = '$295 <span>/month (billed annually)</span>';
    });
  }

  const calcService = document.getElementById('pricing-calc-service');
  const calcYard = document.getElementById('pricing-calc-yard');
  const calcFreq = document.getElementById('pricing-calc-freq');
  const calcMulch = document.getElementById('pricing-addon-mulch');
  const calcAeration = document.getElementById('pricing-addon-aeration');
  const calcFeed = document.getElementById('pricing-addon-feed');
  const calcDisplay = document.getElementById('pricing-calc-result');

  function calculateRate() {
    if (!calcDisplay) return;

    let base = 65;
    const s = calcService ? calcService.value : 'mowing';
    const y = calcYard ? calcYard.value : 'small';
    const f = calcFreq ? calcFreq.value : 'biweekly';

    if (s === 'design') base = 350;
    else if (s === 'cleanup') base = 180;
    else if (s === 'aeration') base = 140;
    else if (s === 'irrigation') base = 120;
    else base = 65;

    let mult = 1.0;
    if (y === 'medium') mult = 1.45;
    else if (y === 'large') mult = 2.1;
    else if (y === 'estate') mult = 3.2;

    let sub = base * mult;

    if (calcMulch && calcMulch.checked) sub += 75;
    if (calcAeration && calcAeration.checked) sub += 60;
    if (calcFeed && calcFeed.checked) sub += 45;

    if (s === 'mowing') {
      if (f === 'weekly') sub *= 0.85;
      else if (f === 'biweekly') sub *= 0.90;
    }

    const low = Math.round(sub * 0.95);
    const high = Math.round(sub * 1.15);

    calcDisplay.textContent = `$${low} - $${high}`;
  }

  [calcService, calcYard, calcFreq, calcMulch, calcAeration, calcFeed].forEach(el => {
    if (el) el.addEventListener('change', calculateRate);
  });

  calculateRate();
});