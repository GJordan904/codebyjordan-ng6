import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { ErrorComponent} from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CbjCommonModule } from './common/cbj-common.module';
import { GrantModule} from './grant/grant.module';
import { DeveloperModule} from './full-stack/developer.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    GrantModule,
    DeveloperModule,
    CbjCommonModule.forRoot(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
