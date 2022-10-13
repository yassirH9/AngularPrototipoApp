import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSendedComponent } from './contact-sended.component';

describe('ContactSendedComponent', () => {
  let component: ContactSendedComponent;
  let fixture: ComponentFixture<ContactSendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
