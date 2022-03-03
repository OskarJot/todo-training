import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmniePageModule } from './pages/omnie.page-module';
import { MojastronaPageModule } from './pages/mojastrona.page-module';
import { KontaktPageModule } from './pages/kontakt.page-module';

const routes: Routes = [{ 
        path: 'Omnie', 
        loadChildren: () => OmniePageModule
      },
  { 
        path: 'mojastrona', 
        loadChildren: () => MojastronaPageModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => KontaktPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
