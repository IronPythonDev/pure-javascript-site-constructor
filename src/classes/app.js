import { Site } from "./site";
import { Sidebar } from "./sidebar";
import { model } from "../model";

export class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    const site = new Site("#site");

    site.render(this.model);

    const updateCallback = (newBlock) => {
      this.model.push(newBlock);
      site.render(model);
    };

    new Sidebar("#panel", updateCallback);
  }
}
