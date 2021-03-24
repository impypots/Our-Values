let value = document.getElementsByClassName("value");


let clickFunc = function() {
    alert("this clicked")
    var menu = this.querySelector('.value-text');
    menu.classList.toggle("hidden");
}


for(let i = 0; i < value.length; i++) {
    value[i].addEventListener('click', clickFunc, false)
}
