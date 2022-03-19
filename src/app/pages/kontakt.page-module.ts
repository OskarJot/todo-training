import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';
import { ContactFormComponentModule } from 'projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';
import { FirebaseMessageServiceModule } from 'projects/messages/src/lib/adapters/secondary/infrastructure/firebase-message.service-module';
@NgModule({
  imports: [
    CommonModule,
    ContactFormComponentModule,
    FirebaseMessageServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: KontaktPage,
      },
    ]),
  ],
  declarations: [KontaktPage],
  providers: [],
  exports: [],
})
export class KontaktPageModule {}
