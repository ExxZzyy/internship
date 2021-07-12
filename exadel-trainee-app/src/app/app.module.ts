import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ConfirmDialogModule } from './models/dialog-module/confirm-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
