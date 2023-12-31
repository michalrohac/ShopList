//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Home from "../routes/home.js";
import NewList from "../routes/new-list.js";
import MyList from "../routes/my-list.js";
import SharedList from "../routes/shared-list.js";
import CompletedList from "../routes/completed-list.js";
import showList from "../routes/show-list.js";

//@@my routes end
import About from "../routes/about.js";
import InitAppWorkspace from "../routes/init-app-workspace.js";
import ControlPanel from "../routes/control-panel.js";
//@@viewOff:imports

//@@viewOn:constants
//@@my routes
/* misto lazyload naimportovat jako knihovnu...
const NewList = Utils.Component.lazy(() => import("../routes/new-list.js"));
const MyList = Utils.Component.lazy(() => import("../routes/my-list.js"));
const SharedList = Utils.Component.lazy(() => import("../routes/shared-list.js"));
const CompletedList = Utils.Component.lazy(() => import("../routes/completed-list.js"));
const showList = Utils.Component.lazy(() => import("../routes/show-list.js"));

//@@my routes end
const About = Utils.Component.lazy(() => import("../routes/about.js"));
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));
const ControlPanel = Utils.Component.lazy(() => import("../routes/control-panel.js"));*/

const ROUTE_MAP = {
  "": { redirect: "home" },
  home: (props) => <Home {...props} />,
  newList: (props) => <NewList {...props} />,
  myList: (props) => <MyList {...props} />,
  sharedList: (props) => <SharedList {...props} />,
  completedList: (props) => <CompletedList {...props} />,
  about: (props) => <About {...props} />,
  showList: (props) => <showList {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": { redirect: "home" },
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs", "es", "de"]}>
        <Uu5Elements.ModalBus>
          <Plus4U5App.Spa routeMap={ROUTE_MAP} />
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
