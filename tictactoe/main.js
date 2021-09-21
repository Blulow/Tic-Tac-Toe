var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var cell9 = document.getElementById('cell9');

var win1 = document.getElementById('win1');
var win2 = document.getElementById('win2');
var win3 = document.getElementById('win3');
var win4 = document.getElementById('win4');
var win5 = document.getElementById('win5');
var win6 = document.getElementById('win6');
var win7 = document.getElementById('win7');
var win8 = document.getElementById('win8');

var winnerP = document.getElementById('winner');

var winner;

var turn = 'X';

function changeTurn() {
    if(turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}

cell1.onclick = function() {
    if(cell1.innerText == '') {
        cell1.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell2.onclick = function() {
    if(cell2.innerText == '') {
        cell2.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell3.onclick = function() {
    if(cell3.innerText == '') {
        cell3.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell4.onclick = function() {
    if(cell4.innerText == '') {
        cell4.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell5.onclick = function() {
    if(cell5.innerText == '') {
        cell5.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell6.onclick = function() {
    if(cell6.innerText == '') {
        cell6.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell7.onclick = function() {
    if(cell7.innerText == '') {
        cell7.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell8.onclick = function() {
    if(cell8.innerText == '') {
        cell8.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}
cell9.onclick = function() {
    if(cell9.innerText == '') {
        cell9.innerText = turn;
        changeTurn();
    }
    checkColor();
    checkWin();
}

function checkColor() {
    if(cell1.innerText == 'X') {
        cell1.style.color = 'blue';
    } else {
        cell1.style.color = 'red';
    }
    if(cell2.innerText == 'X') {
        cell2.style.color = 'blue';
    } else {
        cell2.style.color = 'red';
    }
    if(cell3.innerText == 'X') {
        cell3.style.color = 'blue';
    } else {
        cell3.style.color = 'red';
    }
    if(cell4.innerText == 'X') {
        cell4.style.color = 'blue';
    } else {
        cell4.style.color = 'red';
    }
    if(cell5.innerText == 'X') {
        cell5.style.color = 'blue';
    } else {
        cell5.style.color = 'red';
    }
    if(cell6.innerText == 'X') {
        cell6.style.color = 'blue';
    } else {
        cell6.style.color = 'red';
    }
    if(cell7.innerText == 'X') {
        cell7.style.color = 'blue';
    } else {
        cell7.style.color = 'red';
    }
    if(cell8.innerText == 'X') {
        cell8.style.color = 'blue';
    } else {
        cell8.style.color = 'red';
    }
}
    
function checkWin() {
    if(cell1.innerText != '' && cell1.innerText == cell2.innerText && cell2.innerText == cell3.innerText) {
        win1.style.display = 'block';
        winner = cell1.innerText;
        winnerP.innerText = winner + 'Won!';
    } else if(cell4.innerText != '' && cell4.innerText == cell5.innerText && cell5.innerText == cell6.innerText) {
        win2.style.display = 'block';
        winner = cell4.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell7.innerText != '' && cell7.innerText == cell8.innerText && cell8.innerText == cell9.innerText) {
        win3.style.display = 'block';
        winner = cell7.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell1.innerText != '' && cell1.innerText == cell4.innerText && cell4.innerText == cell7.innerText) {
        win4.style.display = 'block';
        winner = cell1.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell2.innerText != '' && cell2.innerText == cell5.innerText && cell5.innerText == cell8.innerText) {
        win5.style.display = 'block';
        winner = cell2.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell3.innerText != '' && cell3.innerText == cell6.innerText && cell6.innerText == cell9.innerText) {
        win6.style.display = 'block';
        winner = cell3.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell1.innerText != '' && cell1.innerText == cell5.innerText && cell5.innerText == cell9.innerText) {
        win7.style.display = 'block';
        winner = cell1.innerText;
        winnerP.innerText = winner + ' Won!';
    } else if(cell3.innerText != '' && cell3.innerText == cell5.innerText && cell5.innerText == cell7.innerText) {
        win8.style.display = 'block';
        winner = cell3.innerText;
        winnerP.innerText = winner + ' Won!';
    }
}