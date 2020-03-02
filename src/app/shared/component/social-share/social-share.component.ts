import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  shareLinks =[
    {url: 'http://facebook.com', ico: 'facebook-f.svg', label: 'facebook'},
    {url: 'http://linkedin.com', ico: 'linkedin-in.svg', label: 'linkedin'},
    {url: 'http://google.com', ico: 'google-plus-g.svg', label: 'google'},
    {url: 'http://twitter.com', ico: 'twitter.svg', label: 'twitter'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
