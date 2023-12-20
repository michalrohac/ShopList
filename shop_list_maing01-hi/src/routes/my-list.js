//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { withRoute, RouteController } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Tile from "../bricks/shop-list/tile.js";
import ListProvider from "../bricks/shop-list/list-provider";
import ListTitle from "../bricks/shop-list/list-title"
import ListView from "../bricks/shop-list/list-view";
import { Box } from "uu5g05-elements";
import CreateView from "../bricks/shop-list/create-view";
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
        <WelcomeRow>My shopping lists</WelcomeRow>
        <div>My shopping lists</div>
        <ListProvider>
          {(ShopListData) => (
            <RouteController routeDataObject={ShopListData}>
              <div>
                <CreateView ShopListData={ShopListData}/>
                <ListView ShopListData={ShopListData} />
                <ListTitle shopList={ShopListData.data}/>
              </div>
            </RouteController>
            )
          }
        </ListProvider>
      </>
    ); //:null; {({ shopList, remove, update, show }) => (<ListView shopList={shopList} onDelete={remove} onUpdate={update} onShow={show} />)}
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewList };
export default NewList;
//@@viewOff:exports
