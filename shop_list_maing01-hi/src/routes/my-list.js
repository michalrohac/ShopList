//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Tile from "../bricks/shop-list/tile";
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

const MyList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MyList",
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
    function handleUpdate(event) {
      alert(
        `You want to update joke ${event.data.name} and you ${
          event.ctrlKey || event.metaKey ? "have" : "haven't"
        } used CTRL or META key.`
      );
    }

    function handleDelete(event) {
      alert(
        `You want to delete joke ${event.data.name}  and you ${
          event.ctrlKey || event.metaKey ? "have" : "haven't"
        } used CTRL or META key.`
      );
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, MyList);

    return (
      //currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <div>List you share with others members and their lists shared with you.</div>
        <WelcomeRow>TEST - my lists</WelcomeRow>
        <Tile
          joke={{
            name: "Bunny ate the wedding ring!",
            text: "Why did the bunny eat the wedding ring? Because he heard it was 18 carrots!",
            averageRating: 4,
            uuIdentityName: "John Smith",
            sys: { cts: "2022-03-17T09:48:38.990Z" },
          }}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
        <Tile
          joke={{
            name: "F5",
            text: "I love the F5 key. It´s just so refreshing.",
            averageRating: 3,
            uuIdentityName: "Harry Potter",
            sys: { cts: "2022-02-14T10:48:38.990Z" },
          }}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
        <Tile
          joke={{
            name: "Random image",
            imageUrl: "https://placeimg.com/640/320/any",
            averageRating: 1,
            uuIdentityName: "Bart Simpson",
            sys: { cts: "2021-02-14T10:48:38.990Z" },
          }}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
      </div>
    ); // : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MyList };
export default MyList;
//@@viewOff:exports
