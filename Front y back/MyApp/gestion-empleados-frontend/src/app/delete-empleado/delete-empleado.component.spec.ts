import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpleadoComponent } from './delete-empleado.component';

describe('DeleteEmpleadoComponent', () => {
  let component: DeleteEmpleadoComponent;
  let fixture: ComponentFixture<DeleteEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmpleadoComponent]
    });
    fixture = TestBed.createComponent(DeleteEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
