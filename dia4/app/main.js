import './style.css'

const carForm = document.querySelector('#car-form')
const carInfos = document.querySelector('.car-infos')

const carsURL = `http://localhost:3333/cars`

const fetchData = async url => {
  try {
    const response = await fetch(url)
    const responseData = await response.json()

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }

    if (!responseData.length) {
      const tableCell = document.createElement('td')

      tableCell.textContent = 'Nenhum carro encontrado.'
      tableCell.colSpan = '5'
      carInfos.appendChild(tableCell)
      return
    }

    responseData.forEach(cars => {
      const tableRow = document.createElement('tr')

      Object.values(cars).forEach(carInfo => {
        const tableContent = document.createElement('td')
        tableContent.textContent = carInfo
        tableRow.appendChild(tableContent)
      })

      carInfos.appendChild(tableRow)
    })

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

carForm.addEventListener('submit', event => {
  event.preventDefault()
  const formElements = Array.from(event.target.elements)
  const carSpecsTemplate = ['image', 'brandModel', 'year', 'plate', 'color']
  const carData = {}

  formElements.forEach((el, index) => {
    if (el.value) {
      carData[carSpecsTemplate[index]] = el.value
    }
  })

  registerCar(carsURL, carData)
  carForm.reset()
  carForm.firstElementChild.focus()
})

const registerCar = async (carsURL, carData) => {
  fetch(carsURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(carData)
  })
}

fetchData(carsURL)