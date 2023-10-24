export type ContactProps = {
    id: string;
    contactName:string;
    phoneNumber : string | number;
    storage :"SIM"|"Device";
    avatar :string|null;
}

export type ContactsListType = Array<ContactProps>;
