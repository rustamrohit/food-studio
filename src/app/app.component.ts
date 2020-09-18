import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'Food Studio';

  constructor(
    private readonly router: Router,
  ) { }

  public onClick(): void {
    this.router.navigate(['/home']);
  }
}
