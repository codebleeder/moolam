import { InputCallback } from "../definitions/InputCallback";

export const inputCallbackText: InputCallback = (prop: string, level: number = 0) => {
    console.log('inputCallbackText')
    const form = document.getElementById('author-input-form');
    const fragment = document.createDocumentFragment();
    const divEl = document.createElement("div");
    divEl.classList.add('ms-' + level);
    const inputHtml = fragment.appendChild(divEl);
       
    const labelEl = document.createElement('label');
    labelEl.htmlFor = 'input-element';
    labelEl.textContent = prop;
    //inputHtml.appendChild(labelEl);

    const inputEl = document.createElement('input');
    inputEl.id = prop + 'input-element';
    inputHtml.appendChild(inputEl);
    form?.appendChild(inputHtml);    
}