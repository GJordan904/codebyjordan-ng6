import { NgModule } from '@angular/core';
import { DeveloperRoutingModule } from './developer-routing.module';
import {CbjCommonModule} from '../common/cbj-common.module';

@NgModule({
  imports: [
    CbjCommonModule,
    DeveloperRoutingModule
  ],
  declarations: []
})
export class DeveloperModule { }
