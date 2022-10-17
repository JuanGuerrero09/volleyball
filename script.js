// VARIABLES


// SELECTORS

//TODO Repartir funcionalidad para cada equipo
const teamOne = document.querySelector('.first').childNodes
const playerUp = document.querySelectorAll('.firstTeam')
const butttonOne = document.querySelector('.btn.one')

console.log(butttonOne)
console.log(playerUp[0].getAttribute('position'))
console.log(playerUp[0].innerText)
console.log(playerUp)


// EVENT LISTENERS

butttonOne.addEventListener('click', rotation)


// FUNCTIONS

// * Debe añadirse la clase y quitarse cuando acabe la animación con promesa

function rotation(){
    playerUp.forEach((player) => {
        console.log(player.getAttribute('class') + " " + player.getAttribute('move'))
        player.classList.add(player.getAttribute('move'))
    })
    setTimeout(changeNumber, 1999)
}

console.log(playerUp[5].innerText, playerUp[4].innerText)

function changeNumber(){
    let space = playerUp[0].innerText
    playerUp[0].innerText = playerUp[1].innerText
    playerUp[1].innerText = playerUp[2].innerText
    playerUp[2].innerText = playerUp[5].innerText
    playerUp[5].innerText = playerUp[4].innerText
    playerUp[4].innerText = playerUp[3].innerText
    playerUp[3].innerText = space
    playerUp.forEach((player) => {
        player.classList.remove(player.getAttribute('move'))
    })
}
