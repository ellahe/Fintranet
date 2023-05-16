import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserTableComponent} from "./user-table.component";
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "primeng/table";
import { TableFiltersComponent } from './table-filters/table-filters.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {FieldsetModule} from "primeng/fieldset";
import {AccordionModule} from "primeng/accordion";
import {CheckboxModule} from "primeng/checkbox";
import { GenderFilterComponent } from './table-filters/gender-filter/gender-filter.component';
import { AgeFilterComponent } from './table-filters/age-filter/age-filter.component';
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import { EyeColorFilterComponent } from './table-filters/eye-color-filter/eye-color-filter.component';
import { BirthdateFilterComponent } from './table-filters/birthdate-filter/birthdate-filter.component';
import {CalendarModule} from "primeng/calendar";

const routes: Routes = [
  {path: '', component: UserTableComponent}
]

@NgModule({
  declarations: [UserTableComponent, TableFiltersComponent, GenderFilterComponent, AgeFilterComponent, EyeColorFilterComponent, BirthdateFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    SidebarModule,
    ButtonModule,
    FieldsetModule,
    AccordionModule,
    CheckboxModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
  ]
})
export class UserTableModule {
}
