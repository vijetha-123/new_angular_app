import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedchildComponent } from './medchild.component';

describe('MedchildComponent', () => {
  let component: MedchildComponent;
  let fixture: ComponentFixture<MedchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
