import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesthsComponent } from './desths.component';

describe('DesthsComponent', () => {
  let component: DesthsComponent;
  let fixture: ComponentFixture<DesthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
