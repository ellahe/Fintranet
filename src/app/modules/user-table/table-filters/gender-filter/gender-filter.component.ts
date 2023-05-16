import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {map, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {gender} from "../../../../store/user.actions";
import {convertKeysToArray} from "../../../../Util/general.funcs";

@Component({
  selector: 'app-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss']
})
export class GenderFilterComponent implements OnInit {

  formGender = new FormGroup({
    male: new FormControl(''),
    female: new FormControl(''),
    others: new FormControl(''),
    notSay: new FormControl(''),
  })

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.formListener();
  }

  formListener(): void {
    this.formGender.valueChanges.pipe(tap(() => {
      this.store.dispatch(gender({gender: convertKeysToArray(this.formGender.value)}));
    })).subscribe();
  }

}
