import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from '../components/profile/profile.component';
import { HeaderComponent } from '../components/profile/header/header.component';
import { SafeHtmlPipe } from '../pipes/safeHtml.pipe';
import { ProfileService } from '../services/profile/profile.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [ProfileComponent, HeaderComponent, SafeHtmlPipe],
  bootstrap: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
