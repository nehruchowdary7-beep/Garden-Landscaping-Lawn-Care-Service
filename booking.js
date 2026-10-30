document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('lawn-booking-form');
  if (!bookingForm) return;

  const serviceSelect = document.getElementById('book-service');
  const yardSizeSelect = document.getElementById('book-yard-size');
  const frequencySelect = document.getElementById('book-frequency');
  const addMulchCheck = document.getElementById('addon-mulch');
  const addAerationCheck = document.getElementById('addon-aeration');
  const addFertilizerCheck = document.getElementById('addon-fertilizer');

  const estimateDisplay = document.getElementById('dynamic-estimate-val');
  const bookingSuccessModal = document.getElementById('booking-success-message');

  const urlParams = new URLSearchParams(window.location.search);
  const paramService = urlParams.get('service');
  if (paramService && serviceSelect) {
    const targetVal = paramService.toLowerCase();
    const matchingOpt = Array.from(serviceSelect.options).find(opt =>
      opt.value === targetVal ||
      (targetVal === 'aeration' && opt.value === 'aeration-seeding') ||
      (targetVal === 'hardscapes' && opt.value === 'design') ||
      (targetVal === 'cleanups' && opt.value === 'cleanup')
    );
    if (matchingOpt) {
      serviceSelect.value = matchingOpt.value;
    }
  }

  function calculateEstimate() {
    if (!estimateDisplay) return;

    let baseRate = 65;
    const service = serviceSelect ? serviceSelect.value : 'mowing';
    const yardSize = yardSizeSelect ? yardSizeSelect.value : 'small';
    const frequency = frequencySelect ? frequencySelect.value : 'biweekly';

    switch (service) {
      case 'design':
        baseRate = 350;
        break;
      case 'cleanup':
        baseRate = 180;
        break;
      case 'aeration-seeding':
        baseRate = 140;
        break;
      case 'irrigation':
        baseRate = 120;
        break;
      default:
        baseRate = 65;
    }

    let sizeMultiplier = 1.0;
    if (yardSize === 'medium') sizeMultiplier = 1.45;
    else if (yardSize === 'large') sizeMultiplier = 2.1;
    else if (yardSize === 'estate') sizeMultiplier = 3.2;

    let subtotal = baseRate * sizeMultiplier;

    if (addMulchCheck && addMulchCheck.checked) subtotal += 75;
    if (addAerationCheck && addAerationCheck.checked) subtotal += 60;
    if (addFertilizerCheck && addFertilizerCheck.checked) subtotal += 45;

    if (service === 'mowing') {
      if (frequency === 'weekly') subtotal *= 0.85;
      else if (frequency === 'biweekly') subtotal *= 0.90;
    }

    const lowRange = Math.round(subtotal * 0.95);
    const highRange = Math.round(subtotal * 1.15);

    estimateDisplay.textContent = `$${lowRange} - $${highRange}`;
  }

  [serviceSelect, yardSizeSelect, frequencySelect, addMulchCheck, addAerationCheck, addFertilizerCheck].forEach(el => {
    if (el) el.addEventListener('change', calculateEstimate);
  });

  calculateEstimate();

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const nameInput = document.getElementById('book-name');
    const phoneInput = document.getElementById('book-phone');
    const emailInput = document.getElementById('book-email');
    const dateInput = document.getElementById('book-date');

    if (nameInput && !nameInput.value.trim()) {
      window.FormValidator.showError(nameInput, 'Please enter your full name.');
      hasError = true;
    } else if (nameInput) {
      window.FormValidator.clearError(nameInput);
    }

    if (phoneInput && !window.FormValidator.validatePhone(phoneInput.value)) {
      window.FormValidator.showError(phoneInput, 'Please provide a valid contact number.');
      hasError = true;
    } else if (phoneInput) {
      window.FormValidator.clearError(phoneInput);
    }

    if (emailInput && !window.FormValidator.validateEmail(emailInput.value)) {
      window.FormValidator.showError(emailInput, 'Please enter a valid email address.');
      hasError = true;
    } else if (emailInput) {
      window.FormValidator.clearError(emailInput);
    }

    if (dateInput && !dateInput.value) {
      window.FormValidator.showError(dateInput, 'Please pick a preferred service date.');
      hasError = true;
    } else if (dateInput) {
      window.FormValidator.clearError(dateInput);
    }

    if (hasError) return;

    const bookingData = {
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: dateInput.value,
      service: serviceSelect ? serviceSelect.value : 'mowing',
      yardSize: yardSizeSelect ? yardSizeSelect.value : 'small',
      estimatedPrice: estimateDisplay ? estimateDisplay.textContent : '$65 - $85',
      submittedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem('verdant-last-booking', JSON.stringify(bookingData));
    } catch (err) {}

    bookingForm.style.display = 'none';
    if (bookingSuccessModal) {
      bookingSuccessModal.style.display = 'block';
      bookingSuccessModal.scrollIntoView({ behavior: 'smooth' });
    }
  });
});