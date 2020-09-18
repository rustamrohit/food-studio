import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private readonly router: Router,
    private readonly titleService: TitleService
  ) {
    this.titleService.setTitle('Food Studio');
  }

  public onClick(): void {
    this.router.navigate(['/resturants']);
  }
}
