import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {name} from "../../../store/user.actions";

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss']
})
export class TableFiltersComponent {
  sidebarVisible = false;
  search = new FormControl('');

  constructor(private store: Store) {
  }

  onFilter(): void {
    this.store.dispatch(name({name: this.search.value || ''}));
  }

  openSlider(): void {
    this.sidebarVisible = true;
  }

}
