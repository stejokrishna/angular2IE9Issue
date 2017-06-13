import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHelpLinksComponent } from './show-help-links.component';

describe('ShowHelpLinksComponent', () => {
  let component: ShowHelpLinksComponent;
  let fixture: ComponentFixture<ShowHelpLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHelpLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHelpLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
