import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootContainerComponent } from './app-root-container.component';

describe('AppRootContainerComponent', () => {
  let component: AppRootContainerComponent;
  let fixture: ComponentFixture<AppRootContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRootContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
