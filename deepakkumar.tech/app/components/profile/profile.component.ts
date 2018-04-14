import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'profile',
  template: require(`./profile.component.html`),
})
export class ProfileComponent {
  profileData: ProfileData;
  public loading: boolean = true;
  constructor(private profileSvc: ProfileService) { }

  ngOnInit() {
    this.profileSvc.getSkills().subscribe(data => {
      this.profileData = data;
      this.loading = false;
    });
  }
}
