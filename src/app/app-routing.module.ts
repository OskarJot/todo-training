import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmniePageModule } from './pages/omnie.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => OmniePageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
