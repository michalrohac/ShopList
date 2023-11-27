//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
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
        <div>List you share with others members and their lists shared with you.</div>
        <WelcomeRow left={<Plus4U5Elements.PersonPhoto size="xl" borderRadius="none" />}>
          TEST - shared lists
        </WelcomeRow>
      </div>
    );
  },
  //@@viewOff:render
});

//@@viewOn:exports
export { SharedList };
export default SharedList;
//@@viewOff:exports