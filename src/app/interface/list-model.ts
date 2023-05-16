import {UserModel} from "./user-model";

export interface List {
  limit: number;
  skip: number;
  total: number;
  users: UserModel[];
}
