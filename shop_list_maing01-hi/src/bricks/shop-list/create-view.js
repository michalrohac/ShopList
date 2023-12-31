//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useState, Lsi } from "uu5g05";
//import Uu5Elements from "uu5g05-elements";
import importLsi from "../../lsi/import-lsi.js";
import { Button, useAlertBus } from "uu5g05-elements";
import CreateForm from "./create-form.js";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM",
};
//@@viewOff:constants

//@@viewOn:helpers
function CreateButton(props) {
  return (
    <Button {...props} colorScheme="primary" significance="highlighted">
      <Lsi import={importLsi} path={["createForm", "createButton"]} />
    </Button>
  );
}
//@@viewOff:helpers

const CreateView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onCreate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onCreate: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();
    const [mode, setMode] = useState(Mode.BUTTON);

    async function handleSubmit(event) {
      let list;

      try {
        list = await props.ShopListDataList.handlerMap.create(event.data.value);
        //list = props.onCreate(event.data.value);
      } catch (error) {
        CreateView.logger.error("Error while creating shopping list!", error);
        addAlert({
          header: "Creation of new shopping list failed!",
          message: error.message,
          priority: "error",
        });
        return;
        // We pass Error.Message instance to the Uu5Forms.Form that shows alert
        //throw new Utils.Error.Message("Shopping list creation failed!", error);
      }

      addAlert({
        message: `Shopping list ${list.name} has been created.`,
        priority: "success",
        durationMs: 2000,
      });

      setMode(Mode.BUTTON);
      props.ShopListDataList.handlerMap.load();
    }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    switch (mode) {
      case Mode.BUTTON:
        return <CreateButton {...elementProps} onClick={() => setMode(Mode.FORM)} />;
      default:
        return <CreateForm {...elementProps} onSubmit={handleSubmit} onCancel={() => setMode(Mode.BUTTON)} />;
    }
    return <div {...attrs}>{content}</div>;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateView };
export default CreateView;
//@@viewOff:exports
