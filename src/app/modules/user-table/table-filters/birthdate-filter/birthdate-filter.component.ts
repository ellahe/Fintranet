import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {tap} from "rxjs";
import {Store} from "@ngrx/store";
import {birthDate} from "../../../../store/user.actions";

@Component({
  selector: 'app-birthdate-filter',
  templateUrl: './birthdate-filter.component.html',
  styleUrls: ['./birthdate-filter.component.scss']
})
export class BirthdateFilterComponent implements OnInit {
  rangeDate = new FormControl(null);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.controlListener();
  }

  controlListener(): void {
    this.rangeDate.valueChanges.pipe(
      tap(() => {
        const value = this.rangeDate.value || [];
        const range = value.filter(i => i);
        this.store.dispatch(birthDate({birthDate: range}));
      })
    ).subscribe()

  }


}
