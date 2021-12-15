import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() clickedNav = new EventEmitter<boolean>();
  valueInc: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  route(route: string, value: boolean) {
    this.valueInc = value;
    console.log(this.valueInc);
    // don't change route if you're already standing @ your click
    if (this.router.url != route) {
      // tell parent component to show its bricks
      this.changeBricks(value);
      // wait for animation to finish before routing to new page
      setTimeout(() => {
        this.router.navigate([route]);
      }, 2000);
    }
  }

  changeBricks(value: boolean) {
    this.clickedNav.emit(value);
  }
}
