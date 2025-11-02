import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.scss']
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoPorMarca: { [key: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos = data;
      this.calcularConteo();
    });
  }

  calcularConteo(): void {
    this.conteoPorMarca = this.vehiculos.reduce((acc, v) => {
      acc[v.marca] = (acc[v.marca] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }
}
