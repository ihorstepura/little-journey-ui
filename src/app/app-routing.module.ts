import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TripFormComponent} from './trip-form/trip-form.component';

const routes: Routes = [
  { path: '', component: TripFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
