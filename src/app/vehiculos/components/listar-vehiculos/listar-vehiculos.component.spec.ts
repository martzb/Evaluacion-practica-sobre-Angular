import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Vehiculo } from '../../vehiculo';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVehiculosComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;

    // Simulamos datos
    component.vehiculos = [
      new Vehiculo(1, 'Renault', 'Kangoo', 2017, 10000, 'plata', '', 'New LS'),
      new Vehiculo(2, 'Chevrolet', 'Spark', 2018, 12000, 'rojo', '', 'LT'),
      new Vehiculo(3, 'Nissan', 'March', 2019, 5000, 'azul', '', 'Sense')
    ];

    fixture.detectChanges();
  });

  it('should create a table with 3 vehicle rows', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
