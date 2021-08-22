const carForm = document.querySelector('#car-form')
const carInfos = document.querySelector('.car-infos')

carForm.addEventListener('submit', event => {
  event.preventDefault()
  const formElements = Array.from(event.target.elements)

  formElements.forEach(el => {
    if (el.value) {
      const tableContent = document.createElement('td')

      tableContent.textContent = el.value
      carInfos.appendChild(tableContent)
    }
  })

  carForm.reset()
  carForm.firstElementChild.focus()
})