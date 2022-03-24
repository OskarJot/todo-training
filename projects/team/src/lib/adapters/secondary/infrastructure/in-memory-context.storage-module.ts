import { NgModule } from '@angular/core';
import { CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/context-dto.storage-port';
import { InMemoryContextStorage } from './in-memory-context.storage';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryContextStorage,
		{provide: CONTEXT_DTO_STORAGE, useExisting: InMemoryContextStorage},
	],
  	exports: [] })
export class InMemoryContextStorageModule {
}
