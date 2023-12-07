import { Utils } from "uu5g05";
import Config from "../../config/config.js";

const TAG = Config.TAG + "Bricks.";

const initialJokeList = [
  {
    id: Utils.String.generateId(),
    name: "Bunny ate the wedding ring!",
    text: "Why did the bunny eat the wedding ring? Because he heard it was 18 carrots!",
    averageRating: 4,
    uuIdentityName: "John Smith",
    sys: { cts: "2022-03-17T09:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "F5",
    text: "I love the F5 key. It´s just so refreshing.",
    averageRating: 3,
    uuIdentityName: "Harry Potter",
    sys: { cts: "2022-02-14T10:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "Joke with image",
    imageUrl: "https://picsum.photos/id/164/640/320",
    averageRating: 1,
    uuIdentityName: "Bart Simpson",
    sys: { cts: "2021-02-14T10:48:38.990Z" },
  },
];

let jokeList = [
  {
    id: Utils.String.generateId(),
    name: "Bunny ate the wedding ring!",
    text: "Why did the bunny eat the wedding ring? Because he heard it was 18 carrots!",
    averageRating: 4,
    uuIdentityName: "John Smith",
    sys: { cts: "2022-03-17T09:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "F5",
    text: "I love the F5 key. It´s just so refreshing.",
    averageRating: 3,
    uuIdentityName: "Harry Potter",
    sys: { cts: "2022-02-14T10:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "Joke with image",
    imageUrl: "https://picsum.photos/id/164/640/320",
    averageRating: 1,
    uuIdentityName: "Bart Simpson",
    sys: { cts: "2021-02-14T10:48:38.990Z" },
  },
];

export default {
  ...Config,

  TAG,
  Css: Utils.Css.createCssModule(
    TAG.replace(/\.$/, "")
      .toLowerCase()
      .replace(/\./g, "-")
      .replace(/[^a-z-]/g, ""),
    process.env.NAME + "/" + process.env.OUTPUT_NAME + "@" + process.env.VERSION // this helps preserve proper order of styles among loaded libraries
  ),
};
