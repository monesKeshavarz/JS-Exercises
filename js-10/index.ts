type ContactProps = {
    id: string;
    contactName:string;
    phoneNumber : string | number;
    storage :"SIM"|"Device";
    avatar :string;
}


const contactNameText = document.querySelector<HTMLInputElement>("#contactName");
const submitButton = document.querySelector("#submitButton");

submitButton?.addEventListener("click",()=>{
    console.log("moshkel dari")
// console.log(contactNameText?.value)
})