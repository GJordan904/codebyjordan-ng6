import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from './bio/bio.component';
import {GrantComponent} from './grant.component';

const routes: Routes = [
  { path: 'grant-jordan', component: GrantComponent, children: [
      { path: '', component: BioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrantRoutingModule { }
