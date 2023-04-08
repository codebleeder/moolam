export const printDataDefinition = (component: any) => {
    for(let prop in component) {
        console.log(prop, ': ');
        if(typeof component[prop] === 'object')
        {
            printDataDefinition(component[prop])
        }
        else if(typeof component[prop] === 'function') 
        {            
            component[prop]();
        }
    }
};