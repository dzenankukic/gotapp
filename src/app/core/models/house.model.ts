import { Member } from "./member.model";

export interface House {
    slug:    string;
    name:    string;
    members: Member[];
}