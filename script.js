const vertImg = document.querySelectorAll('.vertical-img')

vertImg.forEach(vertImg => {
    vertImg.addEventListener('click', () => {
        removeAccordionActive()
        vertImg.classList.add('vertical-active')
    })
})

function removeAccordionActive() {
    vertImg.forEach(vertImg => {
        vertImg.classList.remove('vertical-active')
    })
}