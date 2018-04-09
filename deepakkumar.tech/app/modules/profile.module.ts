import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterComponent } from '../components/master.component';
import { HeaderComponent } from '../components/header.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [MasterComponent , HeaderComponent],
    bootstrap: [MasterComponent ]
})
export class ProfileModule { }
