let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let titleText = document.getElementById('para1');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#39393a';
        document.body.style.color = 'white';
        logo.src = 'byui-logo-white.png';
        titleText.style.color = '#a5c7e0'; // code for changes to colors and logo
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'byui-logo.png';
        titleText.style.color = '#035f9c';// code for changes to colors and logo
    }
}