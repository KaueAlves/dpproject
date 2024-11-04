import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuildindComponent } from './create-buildind.component';

describe('CreateBuildindComponent', () => {
  let component: CreateBuildindComponent;
  let fixture: ComponentFixture<CreateBuildindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBuildindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBuildindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
