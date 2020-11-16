import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectMessagingComponent } from './user-direct-messaging.component';

describe('UserDirectMessagingComponent', () => {
  let component: UserDirectMessagingComponent;
  let fixture: ComponentFixture<UserDirectMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDirectMessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
