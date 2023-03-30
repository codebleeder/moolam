import { AuthorInput } from "./AuthorInput"
import { DataDefinition } from "./DataDefinition"

const Header: DataDefinition = {
    title: {
        type: 'string',
        authorInput: AuthorInput.TextBox
    },
    subTitle: {
        type: 'string',
        authorInput: AuthorInput.TextBox
    },
    backgroundImage: {
        type: 'string',
        authorInput: AuthorInput.Image
    }
}