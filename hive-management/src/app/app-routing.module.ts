import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HiveDetailComponent } from './hive-detail/hive-detail.component';
import { HivesComponent } from './hives/hives.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hives', component: HivesComponent },
  { path: 'hive/:id', component: HiveDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
