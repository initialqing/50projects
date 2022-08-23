const times = document.querySelector('#times')
const loveme = document.querySelector('.loveMe');

let clickTime = 0;
let timesClick = 0;

loveme.addEventListener('click', (e) => {
    // 控制双击点击的逻辑代码
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime();
        }
    }
})

function createHeart(e) {
    const heart = document.createElement('i');

    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;

    heart.style.left = `${xInside}px`;

    times.innerHTML = ++timesClick;

    loveme.appendChild(heart);

    setTimeout(() => heart.remove(), 1000)
}