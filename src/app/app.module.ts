import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { NavbarComponentModule } from 'projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AdminPageModule } from './pages/admin.page-module';
import { CommonModule } from '@angular/common';
import { InMemoryContextStorageModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module';
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
    AdminPageModule,
    CommonModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firestoreConfig),
    InMemoryContextStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
