// Importando o módulo itemClass
import itemBundle from "./itemClass";
import { normalItem } from "./itemClass";

export default function tratarItem(l) {
    if (l instanceof itemBundle) {
        console.log(l.getName());
    }
    if (l instanceof normalItem) {
        console.log(l.getName());
    }
}
