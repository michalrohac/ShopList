//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Tile from "../bricks/shop-list/tile.js";
import ListProvider from "../bricks/shop-list/list-provider";
import ListView from "../bricks/shop-list/list-view";
//@@viewOff:imports

//@@viewOn:constants
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
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const NewList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewList",
  //nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, NewList);

    return (
      <>
        <RouteBar />
        <ListProvider>
          {({ jokeList, remove, update }) => <ListView jokeList={jokeList} onDelete={remove} onUpdate={update} />}
        </ListProvider>
      </>
    ); //:null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewList };
export default NewList;
//@@viewOff:exports
