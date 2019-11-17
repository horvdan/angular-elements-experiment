import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-my-element",
  templateUrl: "./my-element.component.html",
  styles: [
    `
      :root() {
        background-color: #bebebe;
      }
    `
  ]
})
export class MyElementComponent implements OnInit {
  view = 1;

  ngOnInit() {}

  setView(view: number) {
    this.view = view;
  }
}
