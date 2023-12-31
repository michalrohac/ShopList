//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, Lsi } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton, FormQuarter, FormSelect, FormSlider } from "uu5g05-forms";
import Config from "./config/config.js";
import { Button, ButtonGroup, Dropdown } from "uu5g05-elements";
import importLsi from "../../lsi/import-lsi.js";
//@@viewOff:imports

const CreateForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onAddRow: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
    onAddRow: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);
    return (
      <Form {...elementProps} onSubmit={props.onSubmit}>
        <FormText name="name" label={<Lsi import={importLsi} path={["createForm", "shopListName"]} />} required />
        <FormText name="text" label={<Lsi import={importLsi} path={["createForm", "shopListDesc"]} />} required />
        <FormText name="ing1" label={<Lsi import={importLsi} path={["createForm", "ing"]} />} />
        <FormText name="quiantity" type="number" label={<Lsi import={importLsi} path={["createForm", "quantity"]} />} />
        <Button onClick={props.AddRow}>+</Button>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 8 }}>
          <CancelButton onClick={props.onCancel}>
            {<Lsi import={importLsi} path={["createForm", "cancelButt"]} />}
          </CancelButton>
          <SubmitButton>{<Lsi import={importLsi} path={["createForm", "createButton"]} />}</SubmitButton>
        </div>
      </Form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateForm };
export default CreateForm;
//@@viewOff:exports
