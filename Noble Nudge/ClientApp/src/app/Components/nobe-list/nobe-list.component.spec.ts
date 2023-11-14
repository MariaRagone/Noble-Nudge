import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobeListComponent } from './nobe-list.component';

describe('NobeListComponent', () => {
  let component: NobeListComponent;
  let fixture: ComponentFixture<NobeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
