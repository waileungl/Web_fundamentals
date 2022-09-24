function hide(click) {
    click.remove();
}

var onClick = document.querySelector("#login")
function loginEvent() {
    onClick.innerText = "Logout";
}
