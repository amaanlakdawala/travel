import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldescriptionComponent } from './hoteldescription.component';

describe('HoteldescriptionComponent', () => {
  let component: HoteldescriptionComponent;
  let fixture: ComponentFixture<HoteldescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoteldescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoteldescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
