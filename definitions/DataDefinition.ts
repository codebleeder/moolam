import { Field } from "./Field";

export type DataDefinition = {
    [key: string]: Field | DataDefinition | DataDefinition[];
}