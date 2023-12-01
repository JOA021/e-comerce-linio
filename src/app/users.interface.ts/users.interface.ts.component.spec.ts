import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInterfaceTsComponent } from './users.interface.ts.component';

describe('UsersInterfaceTsComponent', () => {
  let component: UsersInterfaceTsComponent;
  let fixture: ComponentFixture<UsersInterfaceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersInterfaceTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersInterfaceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
