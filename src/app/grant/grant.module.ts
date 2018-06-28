import { NgModule } from '@angular/core';
import { CbjCommonModule } from '../common/cbj-common.module';

import { GrantRoutingModule } from './grant-routing.module';
import { BioComponent } from './bio/bio.component';
import { GrantComponent } from './grant.component';

@NgModule({
  declarations: [
    BioComponent,
    GrantComponent,
  ],
  imports: [
    CbjCommonModule,
    GrantRoutingModule,
  ],
})
export class GrantModule { }
