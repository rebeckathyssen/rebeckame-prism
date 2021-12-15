import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { fadeAnimation } from "../animations/animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [fadeAnimation],
})
export class AboutComponent implements OnInit {
  showBricks: boolean = false;

  constructor() {}

  ngOnInit() {
    // The animations of the bricks are a little faster than loading the site itself, timing it out for 100ms solves this issue.
    // Bricks should be true when site loads so the bricks can dance in.
    setTimeout(() => {
      this.toggleBricks();
    }, 100);
  }

  toggleBricks() {
    this.showBricks = !this.showBricks;
  }
}
