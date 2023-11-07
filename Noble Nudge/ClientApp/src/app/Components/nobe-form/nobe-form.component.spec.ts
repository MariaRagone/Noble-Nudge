import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobeFormComponent } from './nobe-form.component';

describe('NobeFormComponent', () => {
  let component: NobeFormComponent;
  let fixture: ComponentFixture<NobeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
