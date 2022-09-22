function hide(self) {
    self.remove();
}

function changeTemp(self) {
    var temperature = document.querySelectorAll(".temperature");
    //querySelectorAll return back an array
    console.log(self.value)
    if (self.value == "F"){
        for(i=0; i<temperature.length; i++){
            temperature[i].innerText = convertToF(temperature[i].innerText);
        }
    }
    else if (self.value =="C"){
        for(i=0; i<temperature.length; i++){
            temperature[i].innerText = convertToC(temperature[i].innerText);
        }
    }
}

function convertToF(celsius) {
    Fahrenheit = celsius*(9/5) + 32;
    return Math.round(Fahrenheit*100)/100;
}

function convertToC(Fahrenheit) {
    celsius = (Fahrenheit - 32) * (5/9);
    return Math.floor(celsius);
}