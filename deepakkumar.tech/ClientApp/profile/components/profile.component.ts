import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'profile',
  template: require(`./profile.component.html`),
  styles: [require('./profile.component.css')],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  public loading: boolean = true;
  public profileData: ProfileData;
  constructor(private profileSvc: ProfileService) { }

  ngOnInit() {
    this.profileSvc.getSkills().subscribe(data => {
      this.profileData = data;
      this.loading = false;
    });
  }
}
