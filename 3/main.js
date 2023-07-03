let a = parseInt(Math.random() * 6) + 1;
let b = parseInt(Math.random() * 6) + 1;

function randomNum(a, b) {
    if (a === 3 && b === 3) {
        return 'Draw';
    } else if(a === 3){
        return 'A is the winner';
    }else if (b === 3) {
        return 'B is the winner';
    } else{
        return '';
    }
}

console.log('A : ' + a);
console.log('B : ' + b);
console.log(randomNum(a, b));






