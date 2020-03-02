import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactsList =[
    {label: 'Headquarters', address: '11 E. Chavdar Street, Office 222, Kiev, Ukraine 04335', phone: '', email: '' },
    {label: 'USA', address: '', phone: '+1 212-336-1440', email: 'usa.hr@trinetix.com' },
    {label: 'Ukraine', address: '', phone: '+38 044-334-2341', email: 'ua.hr@trinetix.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
