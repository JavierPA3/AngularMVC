import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarContactosComponent } from './editar-contactos/editar-contactos.component'; // Import the missing component

const routes: Routes = [
  { path: 'editar/:id', component: EditarContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
