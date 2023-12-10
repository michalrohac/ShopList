//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton, FormQuarter, FormSelect, FormSlider } from "uu5g05-forms";
import Config from "./config/config.js";
import { Dropdown } from "uu5g05-elements";
//@@viewOff:imports

const CreateForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);
    return (
      <Form {...elementProps} onSubmit={props.onSubmit}>
        <FormText name="name" label="Name" required />
        <FormText name="text" label="Text" required />
        <FormText name="ing1" label="Ingredience" />
        <FormText name="value1" label="Value" />
        <FormSlider name="ing2" label="Ingredience" />
        <FormText name="value2" label="Value" />
        <FormText name="ing3" label="Ingredience" />
        <FormText name="value3" label="Value" />
        <FormText name="ing4" label="Ingredience" />
        <FormText name="value4" label="Value" />
        <FormText name="ing5" label="Ingredience" />
        <FormText name="value5" label="Value" />

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 8 }}>
          <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
          <SubmitButton>Create new list</SubmitButton>
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
