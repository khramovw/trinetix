import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  maiNav = [
    {path: '', label: 'Case studies', style: ''},
    {path: 'services', label: 'Services', style: ''},
    {path: '', label: 'Expertise', style: ''},
    {path: '', label: 'About', style: ''},
    {path: '', label: 'Contact us', style: 'outline'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
