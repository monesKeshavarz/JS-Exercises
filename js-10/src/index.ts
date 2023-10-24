type ContactProps = {
    id: string;
    contactName:string;
    phoneNumber : string | number;
    storage :"SIM"|"Device";
    avatar :string|null;
}

type ContactsListType = Array<ContactProps>;

const contactsList :ContactsListType =[];

const contactNameInput = document.querySelector<HTMLInputElement>("#contactName");
const phoneNumberInput = document.querySelector<HTMLInputElement>("#phoneNumber");
const SIMStorageInput = document.querySelector<HTMLInputElement>("#SIMStorage");
const deviceStorageInput = document.querySelector<HTMLInputElement>("#deviceStorage");
const contactsListDrawer = document.querySelector<HTMLButtonElement>("#contactsListDrawer");
const showContactsButton = document.querySelector<HTMLButtonElement>("#showContactsButton");
const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
const colseDrawerButton = document.querySelector<HTMLButtonElement>("#colseDrawerButton");

submitButton?.addEventListener("click",()=>{

const newContact :ContactProps = {
    id:crypto.randomUUID(),
    contactName:contactNameInput?.value??"",
    phoneNumber :phoneNumberInput?.value??"",
    storage :deviceStorageInput?.checked?"Device":"SIM",
    avatar :null
}
console.log(newContact);
})

showContactsButton?.addEventListener("click",()=>{
    contactsListDrawer?.classList.remove("bottom-[-100%]");
    contactsListDrawer?.classList.add("bottom-[0%]");
})

colseDrawerButton?.addEventListener("click",()=>{
    contactsListDrawer?.classList.add("bottom-[-100%]");
    contactsListDrawer?.classList.remove("bottom-[0%]");
})
