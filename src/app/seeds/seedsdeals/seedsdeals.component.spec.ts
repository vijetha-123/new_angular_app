import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsdealsComponent } from './seedsdeals.component';

describe('SeedsdealsComponent', () => {
  let component: SeedsdealsComponent;
  let fixture: ComponentFixture<SeedsdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
