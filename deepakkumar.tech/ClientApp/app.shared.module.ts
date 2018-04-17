import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/components/app.component';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ProfileModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
    ])
  ]
})
export class AppModuleShared {
}
