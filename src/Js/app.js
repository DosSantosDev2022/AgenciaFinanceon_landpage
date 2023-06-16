// função para menu mobile
const bars = document.querySelector('#mobileMenu');
const navMenu = document.querySelector('#mobileNavBar');

bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navMenu.classList.toggle('active');
  
  if (navMenu.classList.contains('active')) {
    // Adiciona o bloqueio de rolagem
    document.body.style.overflow = 'hidden';
  } else {
    // Remove o bloqueio de rolagem
    document.body.style.overflow = '';
  }
});
