import { contactNameInput, phoneNumberInput, deviceStorageInput, contactsListDrawer, showContactsButton, submitButton, colseDrawerButton, contactListElement } from "./src/importer.js";
const contactsList = [];
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    var _a, _b;
    const newContact = {
        id: crypto.randomUUID(),
        contactName: (_a = contactNameInput === null || contactNameInput === void 0 ? void 0 : contactNameInput.value) !== null && _a !== void 0 ? _a : "",
        phoneNumber: (_b = phoneNumberInput === null || phoneNumberInput === void 0 ? void 0 : phoneNumberInput.value) !== null && _b !== void 0 ? _b : "",
        storage: (deviceStorageInput === null || deviceStorageInput === void 0 ? void 0 : deviceStorageInput.checked) ? "Device" : "SIM",
        avatar: null
    };
    contactsList.push(newContact);
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-2 bg-slate-100 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.innerText = newContact.contactName;
    contactNameElement.className = "text-slate-700";
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();
    contactPhoneNumberElement.className = "text-slate-500";
    listItem.append(contactNameElement, contactPhoneNumberElement);
    contactListElement === null || contactListElement === void 0 ? void 0 : contactListElement.append(listItem);
});
showContactsButton === null || showContactsButton === void 0 ? void 0 : showContactsButton.addEventListener("click", () => {
    contactsListDrawer === null || contactsListDrawer === void 0 ? void 0 : contactsListDrawer.classList.remove("bottom-[-100%]");
    contactsListDrawer === null || contactsListDrawer === void 0 ? void 0 : contactsListDrawer.classList.add("bottom-[0%]");
});
colseDrawerButton === null || colseDrawerButton === void 0 ? void 0 : colseDrawerButton.addEventListener("click", () => {
    contactsListDrawer === null || contactsListDrawer === void 0 ? void 0 : contactsListDrawer.classList.add("bottom-[-100%]");
    contactsListDrawer === null || contactsListDrawer === void 0 ? void 0 : contactsListDrawer.classList.remove("bottom-[0%]");
});
//# sourceMappingURL=index.js.map