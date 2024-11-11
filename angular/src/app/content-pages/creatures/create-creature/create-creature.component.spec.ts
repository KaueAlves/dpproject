import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreatureComponent } from './create-creature.component';

describe('CreateCreatureComponent', () => {
  let component: CreateCreatureComponent;
  let fixture: ComponentFixture<CreateCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCreatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
