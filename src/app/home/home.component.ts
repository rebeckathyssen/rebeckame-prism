import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "../animations/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [fadeAnimation],
})
export class HomeComponent implements OnInit {
  constructor() {}

  showBricks: boolean = false;
  textInD4 = [];

  ngOnInit() {
    // The animations of the bricks are a little faster than loading the site itself, timing it out for 100ms solves this issue.
    // Bricks should be true when site loads so the bricks can dance in.
    setTimeout(() => {
      this.toggleBricks();
    }, 100);

    // Loading background text as an array with objects to be able to set opacity, click etc depending on "link" = true.
    this.addTextToArray();
  }

  toggleBricks() {
    this.showBricks = !this.showBricks;
  }

  addTextToArray() {
    const ranTextArray = [
      { text: "<br />", link: false },
      { text: "<html>", link: false },
      { text: "<div>", link: false },
      { text: "<code♥>", link: false },
      { text: "</code♥>", link: false },
      { text: "<enter>", link: true },
    ];
    for (let i = 0; i < 110; i++) {
      let randomPick = Math.floor(Math.random() * ranTextArray.length);
      this.textInD4.push(ranTextArray[randomPick]);
    }
  }

  route(link) {
    if (link) {
      setTimeout(() => {
        // route to other site
      }, 3000);
    }
  }
}
