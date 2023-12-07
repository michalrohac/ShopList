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
import CreateView from "../bricks/shop-list/create-view";
import ListTitle from "../bricks/shop-list/list-title.js";
//@@viewOff:imports
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SharedList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SharedList",
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
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, SharedList);

    return (
      //currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <ListProvider>
          {({ jokeList, remove, update, show, create }) => (
            <>
              <ListView jokeList={jokeList} onDelete={remove} onUpdate={update} onShow={show} />
              <ListTitle jokeList={jokeList} />
            </>
          )}
        </ListProvider>
      </div>
    ); //:null;
  },
  //@@viewOff:render
});

//@@viewOn:exports
export { SharedList };
export default SharedList;
//@@viewOff:exports
