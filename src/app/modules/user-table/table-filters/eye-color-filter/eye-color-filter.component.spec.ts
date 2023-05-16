import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeColorFilterComponent } from './eye-color-filter.component';

describe('EyeColorFilterComponent', () => {
  let component: EyeColorFilterComponent;
  let fixture: ComponentFixture<EyeColorFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeColorFilterComponent]
    });
    fixture = TestBed.createComponent(EyeColorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
