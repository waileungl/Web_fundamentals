var currentDisplay = document.querySelector("#display");
arr = [];
//To display the number user pressed
function press(self) {
    arr.push(self);
    if (currentDisplay.innerText == 0) {
        currentDisplay.innerText = self;
    }
    else{
        currentDisplay.innerText += self;
    }
}

function setOP(self) {
    arr.push(self);
    currentDisplay.innerText += self;
}

function calculate() {
    result = eval(currentDisplay.innerText);
    //scret egg
    if (currentDisplay.innerText == "19970724"){
        currentDisplay.innerText = "手术顺利!";
    }
    else{
        currentDisplay.innerText = result;
    }
}

function clr() {
    currentDisplay.innerText = 0;
}

function deleteNumber() {
    lastChar = arr[arr.length - 1].toString();
    if (currentDisplay.innerText.length == 1) {
        currentDisplay.innerText = 0;
    }
    else {
        currentDisplay.innerText = currentDisplay.innerText.replace(lastChar,"");
    }
}