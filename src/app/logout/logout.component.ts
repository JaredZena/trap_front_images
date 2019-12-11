import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  username = ''

  constructor(private hardcodedAutheticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardcodedAutheticationService.logout();
  }

}
