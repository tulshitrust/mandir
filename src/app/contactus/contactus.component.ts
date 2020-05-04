import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

export class ContactusComponent implements OnInit {

  mapUrl = "https://maps.google.com/maps?q=ram%20mandir%20aayodya&t=&z=13&ie=UTF8&iwloc=&output=embed" ;

  contactInfo = [
          {title : 'General Informaton', subtitle : 'Inquiry', id : 'info@tulshitrust.com'},
          {title : 'Sales & Learning', subtitle : 'Business development', id : 'sales@tulshitrust.com'},
          {title : 'Current Openings', subtitle : 'Job apply', id : 'careers@tulshitrust.com'}
  ];

getTouch = [
    {img:'assets/images/contact', subtitle : 'Corporate Office', street_1: 'tulshitrust Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,', street_2: 'Navre Park, Ambarnath (W),Thane - 421501', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@tulshitrust.com'},
    {img:'assets/images/contact', subtitle : 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@tulshitrust.com'},
    {img:'assets/images/contact', subtitle : 'Thane', street_1: 'B-103, Elegant Tower,Shangvi Complex,,', street_2: 'Mira Road, Thane Mumbai ', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@tulshitrust.com'},
];

  constructor() { }
 
  ngOnInit() {

  }

}
