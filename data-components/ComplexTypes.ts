import { DataDefinition } from "../definitions/DataDefinition";
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
let navLinks: DataDefinition[] = [
    {link1: inputCallbackText},
    {link2: inputCallbackText},
    {link3: inputCallbackText}
];
let footer: DataDefinition = {
    navLinks: navLinks
}
let fullWidthTitle2: DataDefinition = {
    title: inputCallbackText
}
export const IndexPage2: DataDefinition = {
    header: header,
    body: {
        fullWidthTitle: fullWidthTitle,
        fullWidthTitle2: fullWidthTitle2
    },
    footer: {
        navLinks: navLinks
    }
}

// example: 
//printDataDefinition(IndexPage2);