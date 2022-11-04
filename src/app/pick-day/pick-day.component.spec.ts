import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDayComponent } from './pick-day.component';

describe('PickDayComponent', () => {
  let component: PickDayComponent;
  let fixture: ComponentFixture<PickDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
