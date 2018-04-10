import { Component, NgModule, Pipe, PipeTransform, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}