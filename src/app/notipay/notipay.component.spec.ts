import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotipayComponent } from './notipay.component';

describe('NotipayComponent', () => {
  let component: NotipayComponent;
  let fixture: ComponentFixture<NotipayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotipayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotipayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
