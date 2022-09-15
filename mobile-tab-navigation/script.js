const liItems = document.querySelectorAll('nav ul li');
const pics = document.querySelectorAll('img');


liItems.forEach((liItems,index) => {
    liItems.addEventListener('click',() => {
        HideliItems();
        HidePic()
        
        liItems.classList.add('active')
        pics[index].classList.add('show')
    })
});

function HideliItems() {
    liItems.forEach(item => {
        item.classList.remove('active')
    })
}

function HidePic() {
    pics.forEach((item) =>{
        item.classList.remove('show')
    })
}