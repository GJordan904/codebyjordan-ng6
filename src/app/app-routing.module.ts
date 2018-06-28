import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },

  { path: 'full-stack-developer', loadChildren: './full-stack/developer.module#DeveloperModule' },
  { path: 'grant-jordan', loadChildren: './grant/grant.module#GrantModule' },

  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
