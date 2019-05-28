import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesListComponent } from './components/services-list/services-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/services",
    pathMatch: "full"
  },
  {
    path: 'services',
    component: ServicesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
