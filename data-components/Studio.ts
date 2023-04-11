import { IndexPage2 } from "./ComplexTypes";
import { printDataDefinition } from "./printDataDefinition";

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

    divEl.appendChild(buttonEl);
    const inputHtml = fragment.appendChild(buttonEl);
    form?.appendChild(inputHtml);
}