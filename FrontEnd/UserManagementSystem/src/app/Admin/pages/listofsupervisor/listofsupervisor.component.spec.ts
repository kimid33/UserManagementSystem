import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsupervisorComponent } from './listofsupervisor.component';

describe('ListofsupervisorComponent', () => {
  let component: ListofsupervisorComponent;
  let fixture: ComponentFixture<ListofsupervisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofsupervisorComponent]
    });
    fixture = TestBed.createComponent(ListofsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
