import itemBundle from "./itemClass.js";
import { normalItem } from "./itemClass.js";

export default function tratarItem(l) {
    if (l.bundle) {
        const var1 = new itemBundle(l);
        console.log(var1);
    }
    if (!l.bundle) {
        const var2 = new normalItem(l);
        console.log(var2);
    }
}
