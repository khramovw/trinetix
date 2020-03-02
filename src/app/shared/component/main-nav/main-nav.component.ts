import { Component, OnInit } from '@angular/core';

// Models
import {MainNavModel} from "../../models/main-nav.model";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  maiNav: MainNavModel[] = [
    {path: 'case', label: 'Case studies', style: ''},
    {path: 'services', label: 'Services', style: ''},
    {path: 'expertise', label: 'Expertise', style: ''},
    {path: 'about', label: 'About', style: ''},
    {path: 'contacts', label: 'Contact us', style: 'outline'}
  ];

  toggleMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle() {
    this.toggleMenu = !this.toggleMenu;
  }

  closeMenu () {
    this.toggleMenu = false;
  }

}
