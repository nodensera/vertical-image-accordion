const accordionItems = document.querySelectorAll('.vertical-accordion-item')

accordionItems.forEach(accordionItems => {
    accordionItems.addEventListener('click', () => {
        removeAccordionActive()
        accordionItems.classList.add('accordion-active')
    })
})

function removeAccordionActive() {
    accordionItems.forEach(accordionItems => {
        accordionItems.classList.remove('accordion-active')
    })
}