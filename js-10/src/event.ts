import {contactsListDrawer,contactNameInput, phoneNumberInput,deviceStorageInput,contactListElement} from "./importer.js"
import {ContactProps,ContactsListType} from "./type"
import {contactsList} from "./state.js"

export const showContactsDrawerHandeler =()=>{
    contactsListDrawer?.classList.remove("bottom-[-100%]");
    contactsListDrawer?.classList.add("bottom-[0%]");
}
export const colseDrawerDrawerHandeler =()=>{
    contactsListDrawer?.classList.add("bottom-[-100%]");
    contactsListDrawer?.classList.remove("bottom-[0%]");
}

export const handelCreatContact =()=>{
    const newContact :ContactProps = {
        id:crypto.randomUUID(),
        contactName:contactNameInput?.value??"",
        phoneNumber :phoneNumberInput?.value??"",
        storage :deviceStorageInput?.checked?"Device":"SIM",
        avatar :null
    }
    contactsList.push(newContact)
    const listItem = document.createElement("li");
    listItem.className="py-4 px-2 bg-slate-100 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.innerText= newContact.contactName;
    contactNameElement.className="text-slate-700";
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();
    contactPhoneNumberElement.className="text-slate-500";
    listItem.append(contactNameElement,contactPhoneNumberElement);
    contactListElement?.append(listItem);
    }