//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi, useLsi } from "uu5g05";
import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
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

const CompletedList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CompletedList",
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
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, CompletedList);
    //const lsi = useLsi(importLsi, [completedLists]);

    return (
      //currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <WelcomeRow>
          <Lsi import={importLsi} path={["completedLists", "compListsName"]} />
        </WelcomeRow>
        <div>
          <Lsi import={importLsi} path={["completedLists", "compListsDesc"]} />
        </div>
      </div>
    ); //null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CompletedList };
export default CompletedList;
//@@viewOff:exports
