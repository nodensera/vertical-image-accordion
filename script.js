const vertImg = document.querySelectorAll('.vertical-accordion-item')

vertImg.forEach(vertImg => {
    vertImg.addEventListener('click', () => {
        removeAccordionActive()
        vertImg.classList.add('accordion-active')
    })
})

function removeAccordionActive() {
    vertImg.forEach(vertImg => {
        vertImg.classList.remove('accordion-active')
    })
}