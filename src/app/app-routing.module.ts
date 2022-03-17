import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmniePageModule } from './pages/omnie.page-module';
import { MojastronaPageModule } from './pages/mojastrona.page-module';
import { KontaktPageModule } from './pages/kontakt.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { HomepagePageModule } from './pages/homepage.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: 'Omnie',
    loadChildren: () => OmniePageModule,
  },
  {
    path: 'mojastrona',
    loadChildren: () => MojastronaPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => KontaktPageModule,
  },
  {
    path: 'Omnie/:name',
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: 'homepage',
    loadChildren: () => HomepagePageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
