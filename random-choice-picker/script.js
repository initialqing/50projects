const tagEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// textarea.focus();

textarea.addEventListener('keyup',(e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagEl.innerHTML = '';

    tags.forEach(tag => {
        const tagsEl = document.createElement('span');
        tagsEl.classList.add('tag');
        tagsEl.innerText = tag;
        tagEl.appendChild(tagsEl);
    })
}

function randomSelect(){
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        if(randomTag!==undefined) {
            highlightTag(randomTag);
            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        },100)
    },3000)
}

function pickRandomTag (){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function heightlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}