import { Routes } from '@angular/router';
import { ListarVehiculosComponent } from './vehiculos/components/listar-vehiculos/listar-vehiculos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-vehiculos',
    pathMatch: 'full'
  },
  {
    path: 'listar-vehiculos',
    component: ListarVehiculosComponent
  }
];
