const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
let selectRating = 'Satisified'

ratingsContainer.addEventListener('click',(e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        clear()
        e.target.parentNode.classList.add('active')
        selectRating = e.target.nextElementSibling.innerHTML
    }else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'

    ) {
        clear()
        e.target.parentNode.classList.add('active')
        selectRating = e.target.innerHTML
    }
})

function clear() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}


sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        </br>
        <strong>Feedback:${selectRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})