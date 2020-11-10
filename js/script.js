// primer modal
const modalOpen = document.getElementById('btn-open-modal');
const modalBackground = document.getElementById('modal-background');
const modalClose = document.getElementById('btn-close-modal');

modalOpen.addEventListener('click', () => modalBackground.classList.add('show--modal') );
modalBackground.addEventListener('click', () => modalBackground.classList.remove('show--modal') );