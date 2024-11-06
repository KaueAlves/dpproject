import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreatureComponent } from './edit-creature.component';

describe('EditCreatureComponent', () => {
  let component: EditCreatureComponent;
  let fixture: ComponentFixture<EditCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCreatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
