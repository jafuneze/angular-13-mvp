import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppRootUiComponent } from './app-root-ui/app-root-ui.component';
import { AppRootContainerComponent } from './app-root-container/app-root-container.component';

@NgModule({
  declarations: [
    AppRootUiComponent,
    AppRootContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootContainerComponent]
})
export class AppModule { }
