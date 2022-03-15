import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { NavbarComponentModule } from 'projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OurTeamComponentModule,
    BrowserAnimationsModule,
    NavbarComponentModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
