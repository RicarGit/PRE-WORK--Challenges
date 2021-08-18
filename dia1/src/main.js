import './style.css'

const link = document.querySelector('[data-js="link"]')
const app = document.querySelector('[data-js="app"]')
app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>`

link.addEventListener('click', () => {
  app.classList.toggle('hidden')
  const isHidden = app.classList.contains('hidden')

  link.textContent = isHidden ? 'Click on me to show!' : 'Click on me to hide!'
})
