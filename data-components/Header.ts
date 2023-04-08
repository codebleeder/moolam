import { AuthorInput } from "../definitions/AuthorInput"
import { DataDefinition } from "../definitions/DataDefinition"
import { inputCallbackText } from "./InputCallbackTextbox"

const Header: DataDefinition = {
    title: {
        authorInput: inputCallbackText
    },
    subTitle: {
        authorInput: inputCallbackText
    },
    backgroundImage: {
        authorInput: inputCallbackText
    }
}