import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedplantsComponent } from './medplants.component';

describe('MedplantsComponent', () => {
  let component: MedplantsComponent;
  let fixture: ComponentFixture<MedplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedplantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
