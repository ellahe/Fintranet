import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {eyeColor, gender} from "../../../../store/user.actions";
import {convertKeysToArray} from "../../../../Util/general.funcs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-eye-color-filter',
  templateUrl: './eye-color-filter.component.html',
  styleUrls: ['./eye-color-filter.component.scss']
})
export class EyeColorFilterComponent {
  formEye = new FormGroup({});

  eyeColors$ = this.userService.eyeColors$.pipe(
    tap((value) => {
      value.forEach(i => this.formEye.addControl(i, new FormControl('')));
      this.formListener();
    }));

  constructor(private userService: UserService, private store: Store) {

  }

  formListener(): void {
    this.formEye.valueChanges.pipe(tap(() => {
      this.store.dispatch(eyeColor({eyeColor: convertKeysToArray(this.formEye.value)}));
    })).subscribe();
  }


}
