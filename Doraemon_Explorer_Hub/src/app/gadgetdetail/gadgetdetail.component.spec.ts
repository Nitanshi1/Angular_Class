import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetdetailComponent } from './gadgetdetail.component';

describe('GadgetdetailComponent', () => {
  let component: GadgetdetailComponent;
  let fixture: ComponentFixture<GadgetdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadgetdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GadgetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
