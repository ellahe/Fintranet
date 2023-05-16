import {createReducer, on} from '@ngrx/store';
import {name, age, email, eyeColor, gender, phone, birthDate} from './user.actions';
import {UserFilter} from "../interface/filter-state";
import {AgeStatus} from "../enum/age-status";

export const initialState: UserFilter = {
  name: '',
  age: 0,
  ageStatus: 0,
  eyeColor: [],
  gender: [],
  birthDate: [],
}

export const filterReducer = createReducer(
  initialState,
  on(name, (state, filter) => { return {...state, name: filter.name} }),
  on(age, (state, filter) => { return {...state, age: filter.age, ageStatus: filter.ageStatus} }),
  on(email, (state, filter) => { return {...state, email: filter.email} }),
  on(eyeColor, (state, filter) => { return {...state, eyeColor: filter.eyeColor} }),
  on(gender, (state, filter) => { return {...state, gender: filter.gender} }),
  on(phone, (state, filter) => { return {...state, phone: filter.phone} }),
  on(birthDate, (state, filter) => { return {...state, birthDate: filter.birthDate} }),
);
