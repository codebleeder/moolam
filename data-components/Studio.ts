import { IndexPage2 } from "./ComplexTypes";
import { printDataDefinition } from "./printDataDefinition";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Studio");
    console.log('index2: ', IndexPage2);
    printDataDefinition(IndexPage2);
});