import { IndexPage2 } from "./ComplexTypes";
import { printDataDefinition } from "./printDataDefinition";
import { printJson } from "./printJson";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Studio");
    console.log('index2: ', IndexPage2);
    printDataDefinition(IndexPage2);
    printSaveButton();
});

const printSaveButton = () => {
    // author-input-form
    const form = document.getElementById('author-input-form');
    const fragment = document.createDocumentFragment();
    const divEl = document.createElement("div");
    
    const buttonEl = document.createElement('button');
    buttonEl.textContent = 'Save';
    buttonEl.classList.add('btn');
    buttonEl.classList.add('btn-primary');
    buttonEl.addEventListener('click', saveBtnEvent);
    buttonEl.type = 'button';

    divEl.appendChild(buttonEl);
    const inputHtml = fragment.appendChild(buttonEl);
    form?.appendChild(inputHtml);
}

const saveBtnEvent = (ev: MouseEvent): any => {
    const jsonCopy = IndexPage2;
    printJson(jsonCopy);
    console.log('saveBtnEvent clicked');
    console.log(jsonCopy);
    publishDataComponent(jsonCopy);
}
const publishDataComponent = (dataComponent: any) => {
    fetch('http://localhost:3001/data-component', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataComponent)
    })
}