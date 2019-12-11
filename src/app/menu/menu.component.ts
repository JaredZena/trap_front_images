import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;

  constructor(private harcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.harcodedAuthenticationService.isUserLoggedIn();
  }

}
