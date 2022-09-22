function hide(self) {
    self.remove();
}

function petTypeNotify(self) {
    if(self.value == "dog"){
        alert("You are looking for a: Dog");
    }else if(self.value == "cat"){
        alert("You are looking for a: Cat");
    }
}

function increaseLike(self) {
    self.innerText ++;
}



