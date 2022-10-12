import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInfBarComponent } from './menu-inf-bar.component';

describe('MenuInfBarComponent', () => {
  let component: MenuInfBarComponent;
  let fixture: ComponentFixture<MenuInfBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInfBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInfBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
