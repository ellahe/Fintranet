import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdateFilterComponent } from './birthdate-filter.component';

describe('BirthdateFilterComponent', () => {
  let component: BirthdateFilterComponent;
  let fixture: ComponentFixture<BirthdateFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdateFilterComponent]
    });
    fixture = TestBed.createComponent(BirthdateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
