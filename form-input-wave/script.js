const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('')
})

// style="transition-delay:${idx * 50}ms"