window.FormValidator = {
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validatePhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    return cleaned.length >= 7 && cleaned.length <= 15;
  },
  showError(inputElement, message) {
    inputElement.classList.add('has-error');
    const parent = inputElement.closest('.form-group') || inputElement.parentElement;
    let errEl = parent.querySelector('.form-error');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'form-error is-visible';
      parent.appendChild(errEl);
    }
    errEl.textContent = message;
    errEl.classList.add('is-visible');
    inputElement.setAttribute('aria-invalid', 'true');
  },
  clearError(inputElement) {
    inputElement.classList.remove('has-error');
    inputElement.removeAttribute('aria-invalid');
    const parent = inputElement.closest('.form-group') || inputElement.parentElement;
    const errEl = parent.querySelector('.form-error');
    if (errEl) {
      errEl.classList.remove('is-visible');
      errEl.textContent = '';
    }
  }
};
