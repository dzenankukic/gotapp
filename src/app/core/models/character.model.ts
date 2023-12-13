import { House } from "./house.model";

export interface Character {
  name:  string;
  slug:  string;
  house: House;
  quotes?: string[];
}
