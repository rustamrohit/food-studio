import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss']
})
export class StartRatingComponent implements OnInit {

  @Input() public currentRating: number;
  public fullRatingCount: number;
  public halfRatingCount: number;
  public emptyRatingCount: number;

  constructor() { }

  public ngOnInit(): void {
    this.emptyRatingCount = Math.trunc(5 - this.currentRating);
    this.halfRatingCount = (
      this.currentRating - Math.floor(this.currentRating) < 1 &&
      this.currentRating - Math.floor(this.currentRating) > 0) ? 1 : 0;
    this.fullRatingCount = 5 - this.emptyRatingCount - this.halfRatingCount;
  }

  public getArrayOfCount(count: number): number[] {
    return  count > 0 ? Array(count).fill(0).map((x, i) => i ) : [];
  }
}
