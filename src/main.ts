import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// VARIABLES


// SELECTORS

//TODO Repartir funcionalidad para cada equipo
const teamOne = document.querySelector('.first').childNodes
const playerFirst = document.querySelectorAll('.firstTeam')
const playerSecond = document.querySelectorAll('.secondTeam')
const butttonOne = document.querySelector('.btn.one')
const butttonTwo = document.querySelector('.btn.two')
const scoreButton = document.querySelectorAll('.score')

console.log(butttonOne)
console.log(playerFirst[0].getAttribute('position'))
console.log(playerFirst[0].innerText)
console.log(playerFirst)


// EVENT LISTENERS

scoreButton.forEach((button)=>addEventListener('click', rotation))


// FUNCTIONS

// * Debe añadirse la clase y quitarse cuando acabe la animación con promesa
//TODO Añadir contador de puntos, iniciar poner clase de .serve y si está ahí no entra al loop

function rotation(e){
    if (e.target.value == 'one'){
        playerFirst.forEach((player) => {
            console.log(player.getAttribute('class') + " " + player.getAttribute('move'))
            player.classList.add(player.getAttribute('move'))
        })
        setTimeout(changeNumberOne, 1999)
    }
    else if (e.target.value == 'two'){
        playerSecond.forEach((player) => {
            console.log(player.getAttribute('class') + " " + player.getAttribute('move'))
            player.classList.add(player.getAttribute('move'))
        })
        setTimeout(changeNumberTwo, 1999)
    }
}


function changeNumberOne(){
    let space = playerFirst[0].innerText
    playerFirst[0].innerText = playerFirst[1].innerText
    playerFirst[1].innerText = playerFirst[2].innerText
    playerFirst[2].innerText = playerFirst[5].innerText
    playerFirst[5].innerText = playerFirst[4].innerText
    playerFirst[4].innerText = playerFirst[3].innerText
    playerFirst[3].innerText = space
    playerFirst.forEach((player) => {
        player.classList.remove(player.getAttribute('move'))
    })
}

console.log(playerSecond)

function changeNumberTwo(){
    let space = playerSecond[0].innerText
    playerSecond[0].innerText = playerSecond[3].innerText
    playerSecond[3].innerText = playerSecond[4].innerText
    playerSecond[4].innerText = playerSecond[5].innerText
    playerSecond[5].innerText = playerSecond[2].innerText
    playerSecond[2].innerText = playerSecond[1].innerText
    playerSecond[1].innerText = space
    playerSecond.forEach((player) => {
        player.classList.remove(player.getAttribute('move'))
    })
}
