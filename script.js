let cells = document.getElementsByClassName("grid-cell")

let game = true
let turn = "x"
let AI = true

// Fills cell with selection
function fillCell(cell, letter) {
    if (cell.innerHTML == "") {
        cell.innerHTML = letter
    }
}

// Alternates turn
function alternateTurn(stdin) {
    if (stdin == "x") {
        return "o"
    } else {
        return "x"
    }
}

function gameOver(player) {
    game = false
    console.log(`${player} wins!`)
    document.getElementById("result-box").innerHTML = `<p>GAME OVER</p><p>${player} wins!</p>`
}

function winCheck(player) {
    let cellOne = document.getElementById("cell-1").innerHTML
    let cellTwo = document.getElementById("cell-2").innerHTML
    let cellThree = document.getElementById("cell-3").innerHTML

    let cellFour = document.getElementById("cell-4").innerHTML
    let cellFive = document.getElementById("cell-5").innerHTML
    let cellSix = document.getElementById("cell-6").innerHTML

    let cellSeven = document.getElementById("cell-7").innerHTML
    let cellEight = document.getElementById("cell-8").innerHTML
    let cellNine = document.getElementById("cell-9").innerHTML

    // Horizontals
    if (cellOne == player && cellTwo == player && cellThree == player) {
        gameOver(player)
    } else if (cellFour == player && cellFive == player && cellSix == player) {
        gameOver(player)
    } else if (cellSeven == player && cellEight == player && cellNine == player) {
        gameOver(player)
    // Verticals
    } else if (cellOne == player && cellFour == player && cellSeven == player) {
        gameOver(player)
    } else if (cellTwo == player && cellFive == player && cellEight == player) {
        gameOver(player)
    } else if (cellThree = player && cellSix == player && cellNine == player) {
        gameOver(player)
    // Diagonals
    } else if (cellOne == player && cellFive == player && cellNine == player) {
        gameOver(player)
    } else if (cellThree == player && cellFive == player && cellSeven == player) {
        gameOver(player)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function AISelection() {
    let cellNumber = getRandomInt(1, 9)

    let cellSelect = `cell-${cellNumber}`
    if (document.getElementById(cellSelect).innerHTML == "") {
        setTimeout(() => {
            document.getElementById(cellSelect).innerHTML = turn
            turn = alternateTurn(turn)
        }, 800);
    } else {
        AISelection()
    }
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", (e) => {
        // Turn logic
        if (game) {
            // Fill cell selection
            fillCell(cells[i], turn)

            // Check for a player winning row
            winCheck(turn)

            // Alternate turn
            turn = alternateTurn(turn)

            // If AI is on, begin computer turn
            if (AI && game) {
                // Get random int between 1 and 9
                AISelection()
            }

            // Check for an AI winning row
            winCheck(turn)
        }
    })
}

