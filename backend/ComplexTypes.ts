import { DataDefinition } from "./DataDefinition";
import { inputCallbackText } from "./InputCallbackTextbox";

let header: DataDefinition = {
    title: {
        authorInput: inputCallbackText
    }
}
let fullWidthTitle: DataDefinition = {
    title: {authorInput: inputCallbackText},
    subTitle: {authorInput: inputCallbackText}
}
let navLinks: DataDefinition[] = [];
let footer: DataDefinition = {
    navLinks: navLinks
}
let IndexPage2: DataDefinition = {
    header: header,
    body: {
        fullWidthTitle: fullWidthTitle
    },
    footer: {
        navLinks: navLinks
    }
}
const printDataDefinition = (component: any) => {
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
}
// example: 
printDataDefinition(IndexPage2);