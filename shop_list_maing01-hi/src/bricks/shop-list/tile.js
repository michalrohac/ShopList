//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
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

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    joke: PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string,
      imageUrl: PropTypes.string,
      averageRating: PropTypes.number.isRequired,
      uuIdentityName: PropTypes.string.isRequired,
      sys: PropTypes.shape({
        cts: PropTypes.string,
      }),
    }).isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
    onShow: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.joke, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.joke, event));
    }

    function handleShow(event) {
      props.onUpdate(new Utils.Event(props.joke, event));
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const { elementProps } = Utils.VisualComponent.splitProps(props);
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Tile);

    return (
      //currentNestingLevel ? (
      <Box {...elementProps}>
        <Text category="interface" segment="title" type="minor" colorScheme="building">
          {props.joke.name}
        </Text>
        <div>
          <Text category="interface" segment="content" type="medium" colorScheme="building">
            {props.joke.text}
          </Text>
        </div>
        <div>
          <img src={props.joke.imageUrl} />
        </div>
        <Line significance="subdued" />
        <div>
          <Text category="interface" segment="content" type="medium" significance="subdued" colorScheme="building">
            {props.joke.uuIdentityName}
          </Text>
        </div>
        <div>
          <Text category="interface" segment="content" type="medium" significance="subdued" colorScheme="building">
            <DateTime value={props.joke.sys.cts} />
          </Text>
        </div>
        <Box significance="distinct">
          {`Average rating: ${props.joke.averageRating.toFixed(props.joke.averageRating % 1 ? 1 : 0)} / 5`}
          <Button
            icon="uubmlstencil-uuappdesignkit-bullet-list"
            onClick={handleShow}
            significance="subdued"
            tooltip="Show list"
          />
          <Button icon="mdi-pencil" onClick={handleUpdate} significance="subdued" tooltip="Update" />
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
        </Box>
      </Box>
    ); //: null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports
