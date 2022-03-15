import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepagePage } from './homepage.page';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, OurTeamComponentModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomepagePage,
        }
      ])],
  	declarations: [HomepagePage],
  	providers: [],
  	exports: [] })
export class HomepagePageModule {
}
