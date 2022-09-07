const button = document.querySelectorAll('.ripple');

button.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonleft = e.target.offsetLeft;


        const xInside = x - buttonleft;
        const yInside = y - buttonTop;
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = `${yInside}px`
        circle.style.left = xInside + `px`
        button.appendChild(circle)

      
        // setTimeout(() => circle.remove(), 500)
    })
});