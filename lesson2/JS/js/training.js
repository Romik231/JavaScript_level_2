// let content2 = document.getElementById('div1');
// content2.innerHTML = ('Совершено новый текст');


// let some = document.getElementsByClassName('the');
// console.log(some);
// some.innerHTML = ('Поменяли цифры');

// let block = document.createElement('div');
// block.className = 'new_div';



// content2.setAttribute('class', 'changeColor');
// content2.style.color = 'green';
// console.log(content2.getAttribute('class'));


console.log('++++++Генерация шахматной доски++++++')


function chessBoard() {
    let blockBoard = document.querySelector('.main');
    let block;

    for (let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){

            block = document.createElement('div');
            blockBoard.appendChild(block);
                  console.log(j);     
        }console.log(i);  
    } 
}

chessBoard();

