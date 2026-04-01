import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    projectBrief: string;
    name: string;
    email: string;
    company: string;
}
export interface backendInterface {
    getAllContacts(): Promise<Array<Contact>>;
    getAllContactsByCompany(): Promise<Array<Contact>>;
    getContact(user: Principal): Promise<Contact>;
    isContactSubmitted(): Promise<boolean>;
    submitContact(contact: Contact): Promise<void>;
}
