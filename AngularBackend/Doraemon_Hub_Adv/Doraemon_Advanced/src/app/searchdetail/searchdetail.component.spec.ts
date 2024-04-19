import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdetailComponent } from './searchdetail.component';

describe('SearchdetailComponent', () => {
  let component: SearchdetailComponent;
  let fixture: ComponentFixture<SearchdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
