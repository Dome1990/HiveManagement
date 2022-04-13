import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HivesComponent } from './hives/hives.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hives', component: HivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
