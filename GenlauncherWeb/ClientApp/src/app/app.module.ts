import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
        {path: '', component: HomeComponent, pathMatch: 'full'},
      ],
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
