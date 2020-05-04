import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = [
    {img : 'assets/images/news', desc_1: 'tulshitrust Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'tulshitrust Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. '},
    {img : 'assets/images/news', desc_1: 'tulshitrust', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'tulshitrust', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'tulshitrust', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'tulshitrust', desc_2: 'Technologies bags new Spend Analysis project...'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
