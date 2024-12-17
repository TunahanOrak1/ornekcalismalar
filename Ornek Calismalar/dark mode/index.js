let themeBtn = document.querySelector('#darkModeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});