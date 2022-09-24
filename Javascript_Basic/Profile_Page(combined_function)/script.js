counter = 500;
function add(self){
    var addConnection = document.querySelector("#label500");
    document.querySelector("#label2").innerText --;
    counter += 1;
    addConnection.innerText = counter;
    self.remove();
}

function decline(self){
    document.querySelector("#label2").innerText --;
    self.remove();
}


edit = true;
function changeName(self){
    if (edit == true){
        self.innerText = "William Liu";
        document.querySelector("#profilePic").src = "images/williamLiu.jpg"
        edit = !edit;
    }
    else{
        self.innerText = "Phil Steve"
        document.querySelector("#profilePic").src = "images/phil-s.jpg"
        edit = !edit;
    }
}

count = true;
function signOut(self){
    if (count == true){
        self.innerText = "Sign in";
        count = !count;
    }
    else{
        self.innerText = "Sign Out"
        count = !count;
    }
}