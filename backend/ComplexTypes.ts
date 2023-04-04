import { AuthorInput } from "./AuthorInput";
import { DataDefinition } from "./DataDefinition";
import { FullWidthTitle } from "./FullWidthTitle";
import { Header2 } from "./Header2";
import { header3 } from "./Header3";
import { inputCallbackText } from "./InputCallbackTextbox";

let fullWidthTitle: DataDefinition = {
    title: {authorInput: inputCallbackText},
    subTitle: {authorInput: inputCallbackText}
}
let navLinks: DataDefinition[] = [

]
let footer: DataDefinition = {
    navLinks: navLinks
}
let IndexPage2: DataDefinition = {
    header: header3,
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
printDataDefinition(IndexPage2);