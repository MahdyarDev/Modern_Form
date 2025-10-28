// افکت سه‌بعدی
const form = document.querySelector('.form');
form.addEventListener('mousemove', (e) => {
  const rect = form.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 6;
  const rotateY = ((x - centerX) / centerX) * 6;
  form.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  form.style.setProperty('--light-x', `${x}px`);
  form.style.setProperty('--light-y', `${y}px`);
});
form.addEventListener('mouseleave', () => {
  form.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});

// چشم برای نمایش رمز
const eyeIcon = document.getElementById('eyeIcon');
const passwordField = document.getElementById('passwordField');

passwordField.addEventListener('input', () => {
  if (passwordField.value.length > 0) {
    eyeIcon.classList.remove('hidden');
  } else {
    eyeIcon.classList.add('hidden');
  }
});

eyeIcon.addEventListener('click', () => {
  const isPassword = passwordField.type === 'password';
  passwordField.type = isPassword ? 'text' : 'password';
  eyeIcon.innerHTML = isPassword
    ? `<path d="M2 12s4.5-7.5 10.5-7.5S23 12 23 12s-4.5 7.5-10.5 7.5S2 12 2 12Zm11.4-1.8 4.35-4.35a.75.75 0 1 0-1.06-1.06l-4.35 4.35A4.502 4.502 0 0 0 8.52 15.6a.75.75 0 0 0 1.06-1.06 3 3 0 0 1 4.22-4.22Z"/>`
    : `<path d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12 18 19.5 12 19.5 1.5 12 1.5 12Zm10.5-4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/>`;
});
