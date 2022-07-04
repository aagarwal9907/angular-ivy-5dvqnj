import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './shared/userdata.service';
import { ProjectService } from './shared/project.service';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
  ],
  providers: [UserService, ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
