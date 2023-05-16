import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, Observable, shareReplay} from "rxjs";
import {List} from "../interface/list-model";
import {Store} from "@ngrx/store";
import {UserModel} from "../interface/user-model";
import {filterByAge, filterByDate} from "../Util/filters.func";
import {initialState} from "../store/user.reducer";
import {UserFilter} from "../interface/filter-state";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: Observable<List> = this.getUser().pipe(shareReplay(1));
  filter$: Observable<UserFilter> = this.store.select('filter');
  eyeColors$: Observable<string[]> = this.users$.pipe(map((res) => [...new Set(res.users.map(i => i.eyeColor))]));

  constructor(private http: HttpClient, private store: Store<{ filter: UserFilter }>) {
  }

  filteredUsers$: Observable<UserModel[]> = this.users$.pipe(
    mergeMap(res => this.filter$.pipe(
      map(filter => {
        // filter by firstname and lastname
        let result = res.users.filter(i => (i.firstName.trim().toLowerCase() + ' ' + i.lastName.trim().toLowerCase()).includes(filter.name.trim().toLowerCase()));
        if (filter.gender.length) result = result.filter(i => filter.gender.indexOf(i.gender) > -1); // filter by genders
        if (filter.eyeColor.length) result = result.filter(i => filter.eyeColor.indexOf(i.eyeColor) > -1); // filter by eye colors
        if (filter.age) result = filterByAge(result, filter.age, filter.ageStatus);// filter by age
        if (filter.birthDate && filter.birthDate.length) result = filterByDate(result, filter.birthDate); // filter by birthdate
        return result;
      })))
  )

  getUser(): Observable<List> {
    return this.http.get<List>('https://dummyjson.com/users', {params: {'limit': 30}});
  }

}
