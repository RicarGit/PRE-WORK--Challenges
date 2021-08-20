//Exercise 1

const form = document.querySelector('form')
const p = document.createElement('p')

const lowerCaseWords = ['de', 'da', 'do', 'das', 'dos']

const formatFullName = fullName => {
  const splitedName = fullName.split(' ')

  const formatName = splitedName.map(name => {
    let correctName = ''
    const firstLetter = name[0]

    correctName += (name && !lowerCaseWords.includes(name))
      ? correctName += name.replace(firstLetter, firstLetter.toUpperCase())
      : correctName += name

    return correctName
  })

  return formatName.join(' ')
}

const showFormattedName = event => {
  const inputValue = event.target.value.toLowerCase()
  const isValidName = /^[a-zA-Z\s]{0,30}$/.test(inputValue)

  if (isValidName) {
    const formattedName = formatFullName(inputValue)

    form.insertAdjacentElement('afterend', p)
    p.textContent = formattedName
  } else {
    p.textContent = 'Insira um nome válido!'
  }
}

form.addEventListener('input', showFormattedName)



//Exercise 2

const select = document.createElement('select')
form.insertAdjacentElement('beforeend', select)
select.setAttribute('multiple', '')

const colorOptions = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  black: '#000000',
  yellow: '#ffff00',
  fuchsia: '#ff00ff',
  navy: '#000080',
  teal: '#008080'
}

const generateColorOptions = options => {
  for (const color in options) {
    const option = document.createElement('option')

    select.appendChild(option)
    option.setAttribute('value', options[color])
    option.textContent = color
  }
}

const clearDivElements = () => {
  const divElements = document.querySelectorAll('div')
  divElements.forEach(div => div.remove())
}

const generateColoredDivBySelectedColor = () => {
  const selectChildrens = Array.from(select.children)
  clearDivElements()

  selectChildrens.forEach(option => {
    if (option.selected) {
      const div = document.createElement('div')

      div.style.backgroundColor = option.value
      form.insertAdjacentElement('afterend', div)
    }
  })
}

generateColorOptions(colorOptions)
select.addEventListener('click', generateColoredDivBySelectedColor)