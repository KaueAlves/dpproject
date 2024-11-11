import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuildindComponent } from './list-buildind.component';

describe('ListBuildindComponent', () => {
  let component: ListBuildindComponent;
  let fixture: ComponentFixture<ListBuildindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBuildindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBuildindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
