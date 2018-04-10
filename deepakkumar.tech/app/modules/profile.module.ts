import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileComponent } from '../components/profile/profile.component';
import { HeaderComponent } from '../components/profile/header/header.component';
import { SafeHtmlPipe } from '../pipes/safeHtml.pipe';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProfileComponent, HeaderComponent, SafeHtmlPipe],
    bootstrap: [ProfileComponent ]
})
export class ProfileModule { }
