export const printJson = (component: any, level: number = 0, id: string = '') => {
    for(let prop in component) {
        //console.log('typeof', ': ', typeof component);
        id += `_${prop}_${level}`;
        
        if(typeof component[prop] === 'object')
        {
            
            
            if(Array.isArray(component[prop]))
            {
                for(let i=0; i<component[prop].length; ++i)
                {
                    const iComponent = component[prop][i];
                    printJson(iComponent, level+1, id);
                }
            }
            else 
            {
                printJson(component[prop], level + 1, id);
            }            
        }
        else if(typeof component[prop] === 'function') 
        {            
            component[prop](prop, level, id);
            component[prop] = (document.getElementById(id) as HTMLInputElement).value;
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