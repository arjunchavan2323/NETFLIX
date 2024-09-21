import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedashbordComponent } from './moviedashbord.component';

describe('MoviedashbordComponent', () => {
  let component: MoviedashbordComponent;
  let fixture: ComponentFixture<MoviedashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
