import { contactsListDrawer, contactNameInput, phoneNumberInput, deviceStorageInput, contactListElement } from "./importer.js";
import { contactsList } from "./state.js";
import { createListItem, validateFildes } from "./function.js";
export const showContactsDrawerHandeler = () => {
    contactsListDrawer?.classList.remove("bottom-[-100%]");
    contactsListDrawer?.classList.add("bottom-[0%]");
};
export const colseDrawerDrawerHandeler = () => {
    contactsListDrawer?.classList.add("bottom-[-100%]");
    contactsListDrawer?.classList.remove("bottom-[0%]");
};
const validateCreateContact = (contactInfo) => {
    if (!validateFildes(contactInfo.contactName, contactInfo.phoneNumber + "")) {
        alert("Filde all Firlds");
        throw Error("Filde all Firlds");
    }
};
export const handelCreatContact = () => {
    const newContact = {
        id: crypto.randomUUID(),
        contactName: contactNameInput?.value ?? "",
        phoneNumber: phoneNumberInput?.value ?? "",
        storage: deviceStorageInput?.checked ? "Device" : "SIM",
        avatar: null
    };
    validateCreateContact({
        contactName: contactNameInput.value,
        phoneNumber: phoneNumberInput.value
    });
    contactsList.push(newContact);
    const listItem = createListItem({
        contactName: newContact.contactName,
        phoneNumber: newContact.phoneNumber
    });
    contactListElement?.append(listItem);
};
//# sourceMappingURL=event.js.map