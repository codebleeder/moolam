import { InputCallback } from "../definitions/InputCallback";

export const inputCallbackText: InputCallback = (prop: string, level: number = 0) => {
    console.log('inputCallbackText')
    const form = document.getElementById('author-input-form');
    const fragment = document.createDocumentFragment();
    const divEl = document.createElement("div");
    divEl.classList.add('ms-' + level);
    divEl.classList.add('mb-3');
    const inputHtml = fragment.appendChild(divEl);
       
    const labelEl = document.createElement('label');
    labelEl.htmlFor = prop;
    labelEl.textContent = prop;
    labelEl.classList.add('form-label');
    inputHtml.appendChild(labelEl);

    const inputEl = document.createElement('input');
    inputEl.id = prop;
    inputEl.classList.add('form-control');
    inputHtml.appendChild(inputEl);
    form?.appendChild(inputHtml);    
}