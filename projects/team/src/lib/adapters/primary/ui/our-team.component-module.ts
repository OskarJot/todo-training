import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [OurTeamComponent],
  providers: [],
  exports: [OurTeamComponent],
})
export class OurTeamComponentModule {}
