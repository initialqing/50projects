const btns = document.querySelectorAll('.panel');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    removeActiveClasses();
    btn.classList.add('active');
  });
});

function removeActiveClasses(){
    btns.forEach(btn => {
        btn.classList.remove('active');
    });
}