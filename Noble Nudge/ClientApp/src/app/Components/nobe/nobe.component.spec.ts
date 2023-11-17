import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobeComponent } from './nobe.component';

describe('NobeComponent', () => {
  let component: NobeComponent;
  let fixture: ComponentFixture<NobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
