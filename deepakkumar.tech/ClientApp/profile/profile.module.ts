import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './components/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileService } from './services/profile.service';
import { SafeHtmlPipeModule } from '../common/pipes/safeHtml/safeHtml.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SafeHtmlPipeModule],
  declarations: [ProfileComponent, HeaderComponent],
  exports: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
