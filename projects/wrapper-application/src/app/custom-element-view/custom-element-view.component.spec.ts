import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElementViewComponent } from './custom-element-view.component';

describe('CustomElementViewComponent', () => {
  let component: CustomElementViewComponent;
  let fixture: ComponentFixture<CustomElementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomElementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomElementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
