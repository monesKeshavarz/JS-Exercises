import {
    showContactsButton,
    submitButton,
    colseDrawerButton,
    contactListElement} from "./src/importer.js"
import {showContactsDrawerHandeler,colseDrawerDrawerHandeler,handelCreatContact} from "./src/event.js"

submitButton?.addEventListener("click",handelCreatContact)

showContactsButton?.addEventListener("click",showContactsDrawerHandeler)
colseDrawerButton?.addEventListener("click",colseDrawerDrawerHandeler)
