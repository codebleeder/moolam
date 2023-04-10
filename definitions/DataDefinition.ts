import { Field } from "./Field";
import { InputCallback } from "./InputCallback";

export type DataDefinition = {
    [key: string]: Field | DataDefinition | DataDefinition[] | InputCallback;
}