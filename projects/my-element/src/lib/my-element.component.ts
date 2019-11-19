import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "my-element",
  templateUrl: "./my-element.component.html",
  styles: [``],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyElementComponent implements OnInit {
  @Input() title: string;
  view = 1;

  ngOnInit() {}

  setView(view: number) {
    this.view = view;
  }
}
