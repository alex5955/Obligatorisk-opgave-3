
let content: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let select: HTMLSelectElement = <HTMLSelectElement> document.getElementById("select");
let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("input");

button.addEventListener("click", function(){
    if(input.value != "") content.innerHTML = input.value;

    switch(select.selectedIndex){
        case 0: content.innerHTML = content.innerText.toUpperCase();
        break;
        case 1: content.innerHTML = content.innerText.toLowerCase();
        break;
        case 2: content.innerHTML = "<div class='red'>" + content.innerText + "</div>";
        break;
        case 3: content.innerHTML = "<div class='blue'>" + content.innerText + "</div>";
        break;
        default: content.innerHTML = content.innerText.toLowerCase();
        break;
    }
});