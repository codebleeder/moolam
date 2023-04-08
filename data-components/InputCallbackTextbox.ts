import { InputCallback } from "../definitions/InputCallback";

export const inputCallbackText: InputCallback = () => {
    console.log('inputCallbackText')
    const form = document.getElementById('author-input-form');
    const fragment = document.createDocumentFragment();
    const inputHtml = fragment.appendChild(document.createElement("div"));
       
    const labelEl = document.createElement('label');
    labelEl.htmlFor = 'input-element';
    labelEl.textContent = 'input';
    inputHtml.appendChild(labelEl);

    const inputEl = document.createElement('input');
    inputEl.id = 'input-element';
    inputHtml.appendChild(inputEl);
    form?.appendChild(inputHtml);    
}