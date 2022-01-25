import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallsSkillsComponent } from './balls-skills.component';

describe('BallsSkillsComponent', () => {
  let component: BallsSkillsComponent;
  let fixture: ComponentFixture<BallsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
