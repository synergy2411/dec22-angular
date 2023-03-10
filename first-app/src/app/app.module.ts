import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';

@NgModule({
  declarations: [       // Component, Directive, Pipe
    AppComponent, UsersComponent, UserInfoComponent, UserImgComponent
  ],
  imports: [            // Module : Built-in / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],        // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
