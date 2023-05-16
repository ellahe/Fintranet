import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AgeStatus} from "../../../../enum/age-status";
import {tap} from "rxjs";
import {Store} from "@ngrx/store";
import {age} from "../../../../store/user.actions";

@Component({
  selector: 'app-age-filter',
  templateUrl: './age-filter.component.html',
  styleUrls: ['./age-filter.component.scss']
})
export class AgeFilterComponent implements OnInit {


  ageForm = new FormGroup({
    age: new FormControl(''),
    status: new FormControl(0),
  });

  statusOptions = [
    {title: 'Equal', id: AgeStatus.equal},
    {title: 'Greater', id: AgeStatus.greater},
    {title: 'Smaller', id: AgeStatus.smaller},
  ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.formListner();
  }

  formListner(): void {
    this.ageForm.valueChanges.pipe(
      tap(() => {
        const formValue = this.ageForm.value;
        const obj = {
          age: (formValue?.age) ? +formValue?.age : 0,
          ageStatus: (formValue?.status) ? formValue?.status : AgeStatus.equal
        };
        this.store.dispatch(age(obj))
      }))
      .subscribe()
  }

}
