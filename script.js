const accordionItem = document.querySelectorAll('.vertical-accordion-item')

accordionItem.forEach(accordionItem => {
    accordionItem.addEventListener('click', () => {
        delAccordionActive()
        accordionItem.classList.add('accordion-active')
    })
})

function delAccordionActive() {
    accordionItem.forEach(accordionItem => {
        accordionItem.classList.remove('accordion-active')
    })
}

