export const createListItem = (contactInfo) => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-2 bg-slate-100 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.innerText = contactInfo.contactName;
    contactNameElement.className = "text-slate-700";
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.innerText = contactInfo.phoneNumber.toString();
    contactPhoneNumberElement.className = "text-slate-500";
    listItem.append(contactNameElement, contactPhoneNumberElement);
    return listItem;
};
export const validateFildes = (...filde) => {
    return filde.every((filde) => !!filde.toString());
};
//# sourceMappingURL=function.js.map