import img from "./assets/img.png";
import {
  TitleBlock,
  TextBlock,
  ColumsBlock,
  ImageBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Pure JavaScript Website Builders", {
    tag: "h4",
    styles: {
      background: "linear-gradient(to right, #ff0099 , #493240);",
      color: "#fff;",
      padding: "1.9rem;",
      "text-alight": "center;",
    },
  }).toHTML(),
  new TextBlock("here we go with some text", {
    tag: "p",
    styles: {
      color: "red",
    },
  }).toHTML(),
  new ColumsBlock(
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit, in unde voluptates accusamus",
      "Aut provident ab reprehenderit pariatur fuga nisi libero repudiandae odit earum",
      "Dolor esse pariatur perspiciatis, autem accusamus maiores",
    ],
    {
      styles: {
        color: "red;",
        "font-size": "20px;",
      },
    }
  ).toHTML(),
  new ImageBlock(img, {
    styles: {
      "border-color": "red;",
      "border-radius": "100px;",
    },
  }).toHTML(),
];
