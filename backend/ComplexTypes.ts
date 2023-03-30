import { AuthorInput } from "./AuthorInput";
import { DataDefinition } from "./DataDefinition";
import { FullWidthTitle } from "./FullWidthTitle";
import { Header2 } from "./Header2";
import { header3 } from "./Header3";

type IndexPage = {
    header: Header2;
    fullWidthTitle: FullWidthTitle;
}
let fullWidthTitle: DataDefinition = {
    title: {type: 'string', authorInput: AuthorInput.TextBox},
    subTitle: {type: 'string', authorInput: AuthorInput.TextBox}
}
let navLink: DataDefinition = {
    label: {type: 'string', authorInput: AuthorInput.TextBox},
    url: {type: 'string', authorInput: AuthorInput.Url}
}
let navLinks: DataDefinition[] = [
    
]
let footer: DataDefinition = {
    navLinks: []
}
let IndexPage2: DataDefinition = {
    header: header3,
    body: {
        fullWidthTitle: fullWidthTitle
    },
    footer: {

    }
}