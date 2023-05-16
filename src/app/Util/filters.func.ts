import {AgeStatus} from "../enum/age-status";

export const filterByAge = (array: any[], age: number, ageStatus: AgeStatus) => {
  if (ageStatus == AgeStatus.equal) array = array.filter(i => i.age === age);
  if (ageStatus == AgeStatus.greater) array = array.filter(i => i.age > age);
  if (ageStatus == AgeStatus.smaller) array = array.filter(i => i.age < age);
  return array;
};

export const filterByDate = (array: any[], range: Date[]) => {
  if (range.length == 1) { // if user select just one date
    const startDate = new Date(range[0]).toDateString();
    array = array.filter(i => {
      const birthDate = new Date(i.birthDate).toDateString();
      return birthDate === startDate;
    });
  }
  else if (range.length == 2) { // if user select range of dates
    const startDate = new Date(range[0]).getTime();
    const endDate = new Date(range[1]).getTime();
    array = array.filter(i => {
      const birthDate = new Date(new Date(i.birthDate).setUTCHours(0, 0, 0, 0)).getTime();
      return +birthDate > +startDate && +birthDate < +endDate;
    });
  }
  return array;
};
