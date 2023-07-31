const buttonDisplay = document.getElementById('btn-display');
const buttonHide = document.getElementById('btn-hide');
const toysList = document.getElementById('toys-list');

function displayToysList(){
    toysList.style.display ='block'
}


function hideToysList(){
    toysList.style.display ='none'
}


buttonDisplay.addEventListener('click', displayToysList)

buttonHide.addEventListener('click', hideToysList)