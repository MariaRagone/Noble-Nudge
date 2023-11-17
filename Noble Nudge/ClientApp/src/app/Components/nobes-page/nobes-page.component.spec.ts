import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobesPageComponent } from './nobes-page.component';

describe('NobesPageComponent', () => {
  let component: NobesPageComponent;
  let fixture: ComponentFixture<NobesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
