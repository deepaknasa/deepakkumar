import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileComponent } from '../components/profile/profile.component';
import { HeaderComponent } from '../components/profile/header/header.component';
import { SafeHtmlPipe } from '../pipes/safeHtml.pipe';
import { ProfileService } from '../services/profile/profile.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProfileComponent, HeaderComponent, SafeHtmlPipe],
    bootstrap: [ProfileComponent],
    providers: [ProfileService]
})
export class ProfileModule { }
