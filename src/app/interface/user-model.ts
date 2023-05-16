import {Address} from "./address-model";
import {BankModel} from "./bank-model";
import {Company} from "./company-model";
import {Hair} from "./hair-model";

export interface UserModel {
  address: Address;
  age: number;
  bank: BankModel;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: Hair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}
