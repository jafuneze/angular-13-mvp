import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsUiComponent } from './items-ui.component';

describe('ItemsUiComponent', () => {
  let component: ItemsUiComponent;
  let fixture: ComponentFixture<ItemsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
