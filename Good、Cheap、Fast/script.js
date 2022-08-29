const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(item => item.addEventListener('change', (e) => doTrick(e.target)))

function doTrick(theCheckedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theCheckedOne) {
            fast.checked = false
        }
        if (cheap === theCheckedOne) {
            good.checked = false
        }
        if (fast === theCheckedOne) {
            cheap.checked = false
        }
    }
}