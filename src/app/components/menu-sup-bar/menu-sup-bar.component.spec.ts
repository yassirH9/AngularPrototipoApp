import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSupBarComponent } from './menu-sup-bar.component';

describe('MenuSupBarComponent', () => {
  let component: MenuSupBarComponent;
  let fixture: ComponentFixture<MenuSupBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSupBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSupBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
