import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustmember',
  templateUrl: './trustmember.component.html',
  styleUrls: ['./trustmember.component.scss']
})
export class TrustmemberComponent implements OnInit {

  trustmember=[
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
