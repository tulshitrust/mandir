import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  clientInfo = [
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
