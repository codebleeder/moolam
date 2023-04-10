export const printDataDefinition = (component: any, level: number = 0) => {
    for(let prop in component) {
        console.log('typeof', ': ', typeof component);
        appendLabelToForm(prop, level);
        if(typeof component[prop] === 'object')
        {
            if(Array.isArray(component[prop]))
            {
                for(let i=0; i<component[prop].length; ++i)
                {
                    const iComponent = component[prop][i];
                    printDataDefinition(iComponent, level+1);
                }
            }
            else 
            {
                printDataDefinition(component[prop], level + 1);
            }            
        }
        else if(typeof component[prop] === 'function') 
        {            
            component[prop](prop, level);
        }
        
    }
};
const appendLabelToForm = (label: string, level: number = 0) => {
    const form = document.getElementById('author-input-form');
    const fragment = document.createDocumentFragment();
    const divEl = document.createElement('div');
    divEl.classList.add('ms-' + level);
    
    const h4El = document.createElement("h4");    
    h4El.textContent = label;
    divEl.appendChild(h4El);
    const inputHtml = fragment.appendChild(divEl);
    form?.appendChild(inputHtml);
}