import {createAction, props} from '@ngrx/store';
import {AgeStatus} from "../enum/age-status";

export const name = createAction('Name', props<{ name: string }>());
export const age = createAction('Age', props<{ age: number, ageStatus: AgeStatus }>());
export const gender = createAction('Gender', props<{ gender: string[] }>());
export const email = createAction('Email', props<{ email: string }>());
export const phone = createAction('Phone', props<{ phone: string }>());
export const eyeColor = createAction('EyeColor', props<{ eyeColor: string[] }>());
export const birthDate = createAction('Birthdate', props<{ birthDate: any[] }>());
