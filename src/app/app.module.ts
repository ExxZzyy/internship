import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { UsersComponent } from './components/mock-component/users/users.component';
import { HomeComponent } from './components/mock-component/home/home.component';
import { CheckComponent } from './components/mock-component/check/check.component';
import { EditorComponent } from './components/mock-component/editor/editor.component';
import { ManageComponent } from './components/mock-component/manage/manage.component';
import { StatisticsComponent } from './components/mock-component/statistics/statistics.component';
import { AuthInterseptor } from './shared/auth.interseptor';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterseptor,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    CheckComponent,
    EditorComponent,
    ManageComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule,
  ],
  providers: [INTERSEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
