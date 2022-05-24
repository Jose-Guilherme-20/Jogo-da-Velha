
document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
 square.addEventListener('click', handleClick);

})

})

function handleClick(event) {
        console.log(event.target)
    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {
        setTimeout(() => {
            alert('o jogo Acabou - O vencedor foi ' + playerTime)
        }, 10); 

    }
    updateSquare(postion);

}
function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbols = board(postion);
    square.innerHTML = `<div class= '${symbols}'><div>`
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => { 
        let postion = square.id;
        let symbols = board [postion];

        if (symbols != "") {
        square.innerHTML = `<div class= '${symbols}'><div>`
        }
    })
}