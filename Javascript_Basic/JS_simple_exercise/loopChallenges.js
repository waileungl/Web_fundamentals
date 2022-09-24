function findOdds() {
    var odds = [];
    for(i = 1; i < 21; i++){
        if(i % 2 == 1){
            odds.push(i);
        }
    }
    return odds;
}

function divisibleThree() {
    for(i = 100; i > 0; i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

function printSequence(sequence) {
    for(i = 0; i < sequence.length; i++){
        console.log(sequence[i]);
    }
}

function sigma() {
    var sum = 0;
    for(i = 1; i < 101; i++){
        sum += i;
    }
    return sum;
}

function factorial() {
    var sum = 1;
    for(i = 1; i < 13; i++){
        sum *= i;
    }
    return sum;
}


console.log(findOdds());
//divisibleThree();
//printSequence([4, 2.5, 1, -0.5, -2, -3.5]);
//console.log(sigma());
//console.log(factorial());