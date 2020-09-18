import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string;

  constructor(
    private readonly router: Router,
    private readonly titleService: TitleService
  ) {
    this.titleService.title$.subscribe((title) => this.title = title ? title : 'Food Studio');
  }

  public onClick(): void {
    this.router.navigate(['/home']);
  }
}
