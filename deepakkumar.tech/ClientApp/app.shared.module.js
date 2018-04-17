var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/components/app.component';
import { ProfileModule } from './profile/profile.module';
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        NgModule({
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
    ], AppModuleShared);
    return AppModuleShared;
}());
export { AppModuleShared };
//# sourceMappingURL=app.shared.module.js.map