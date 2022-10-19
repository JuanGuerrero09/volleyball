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