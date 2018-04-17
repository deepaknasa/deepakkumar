import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'profile-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.css')],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent { }
