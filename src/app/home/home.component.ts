import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor() {
  
 
  }

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  banner = [
    {
      img: 'assets/images/banner',
      title: 'WE SPECIALIZE IN IMPROVING',
      title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
      description: 'We do this by improving the way our clients use people, processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
    },
    {
      img: 'assets/images/banner',
      title: 'WE SPECIALIZE IN IMPROVING',
      title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
      description: 'We do this by improving the way our clients use people.'
    },
    {
      img: 'assets/images/banner',
      title: 'WE SPECIALIZE IN IMPROVING',
      title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
      description: 'We do this by improving processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
    }
  ]

  trustmember=[
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'},
    {name: 'Ajay Singh', post: 'President', desc: ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'}
  ];

  gallery =[
    {class: 'col-lg-5 col-md-5', description: 'consectetur adipiscing elit'},
    {class: 'col-lg-7 col-md-7', description: 'consectetur adipiscing elit'},
    {class: 'col-lg-6 col-md-6', description: 'consectetur adipiscing elit'},
    {class: 'col-lg-6 col-md-6', description: 'consectetur adipiscing elit'},
    {class: 'col-lg-5 col-md-5', description: 'consectetur adipiscing elit'},
    {class: 'col-lg-7 col-md-7', description: 'consectetur adipiscing elit'}
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}

