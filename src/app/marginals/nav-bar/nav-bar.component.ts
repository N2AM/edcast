import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navLinks: { label: string; link: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navLinks = [
      { label: 'Courses', link: '/courses' },
      { label: 'Events', link: '/events' },
      { label: 'Instructors', link: '/instructors' },
    ];
  }
}
