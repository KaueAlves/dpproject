import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuildindComponent } from './edit-buildind.component';

describe('EditBuildindComponent', () => {
  let component: EditBuildindComponent;
  let fixture: ComponentFixture<EditBuildindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBuildindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBuildindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
