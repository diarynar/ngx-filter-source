import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFilterLibraryComponent } from './ngx-filter.component';

describe('NgxFilterLibraryComponent', () => {
  let component: NgxFilterLibraryComponent;
  let fixture: ComponentFixture<NgxFilterLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFilterLibraryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxFilterLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
