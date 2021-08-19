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