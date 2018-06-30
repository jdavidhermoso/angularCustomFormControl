import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicerComponent } from './choicer-component.component';

describe('ChoicerComponentComponent', () => {
  let component: ChoicerComponent;
  let fixture: ComponentFixture<ChoicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
