export const printDataDefinition = (component: any, level: number = 0, id: string = '') => {
    for(let prop in component) {
        //console.log('typeof', ': ', typeof component);
        id += `_${prop}_${level}`;
        console.log('id: ', id);
        if(typeof component[prop] === 'object')
        {
            appendLabelToForm(prop, level);
            
            if(Array.isArray(component[prop]))
            {
                for(let i=0; i<component[prop].length; ++i)
                {
                    const iComponent = component[prop][i];
                    printDataDefinition(iComponent, level+1, id);
                }
            }
            else 
            {
                printDataDefinition(component[prop], level + 1, id);
            }            
        }
        else if(typeof component[prop] === 'function') 
        {            
            component[prop](prop, level, id);
        }
        const indexOfAppendedId = id.indexOf(`_${prop}_${level}`);
        if(indexOfAppendedId === 0) 
        {
            id = '';
        }
        else 
        {
            id = id.substring(0, indexOfAppendedId);
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