const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');

const slideLength = slideRight.querySelectorAll('div').length;

const slideContainer = document.querySelector('.slider-container')
let activeSlideIndex = 0;


// 设置左边部分的初始状态
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction) {

    const sliderHeight = slideContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++
        // 索引向上超过了就回到第一个初始图
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0
        }
    }
    if (direction === 'down') {
        activeSlideIndex--
        // 索引向下超过了就回到最后一个图
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}