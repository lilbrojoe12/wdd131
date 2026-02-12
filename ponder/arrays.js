//.forEach
const steps = ['one','two', 'three'];

// steps.forEach(function(item){
//     console.log;
// });

steps.forEach(showSteps);

function showSteps(step){
    console.log(step);
};

//.map

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`
};

myList.innerHTML = stepsHtml.join('');