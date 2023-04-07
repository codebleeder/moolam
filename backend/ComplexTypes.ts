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
export const IndexPage2: DataDefinition = {
    header: header,
    body: {
        fullWidthTitle: fullWidthTitle
    },
    footer: {
        navLinks: navLinks
    }
}

// example: 
//printDataDefinition(IndexPage2);