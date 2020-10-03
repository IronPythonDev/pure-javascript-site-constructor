import { col, css, row } from "../utils";

export class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Not implements class exception");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = "p", styles } = this.options;
    return row(col(`<${tag}>${this.value}<${tag}>`), css(styles));
  }
}

export class ColumsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(col).join("");
    return row(html, css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(
      `<img src="${this.value}" style="${css(this.options.styles)}"/>`
    );
  }
}
