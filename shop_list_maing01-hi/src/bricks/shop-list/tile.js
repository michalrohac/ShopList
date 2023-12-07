//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }),

  header: () =>
    Config.Css.css({
      display: "block",
      padding: 16,
      height: 48,
    }),

  content: (image) =>
    Config.Css.css({
      display: "flex",
      alignItems: image ? "center" : "left",
      justifyContent: image ? "center" : "flex-start",
      height: "calc(100% - 48px - 48px)",
      overflow: "hidden",
    }),

  text: () =>
    Config.Css.css({
      display: "block",
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
    }),

  image: () => Config.Css.css({ width: "50%" }),

  footer: () =>
    Config.Css.css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 48,
      marginTop: 8,
      paddingLeft: 16,
      paddingRight: 8,
    }),

  infoLine: () =>
    Config.Css.css({
      display: "block",
      marginLeft: 16,
      marginTop: 8,
    }),
};
//@@viewOff:css

//@@viewOn:helpers
function InfoLine({ children }) {
  return (
    <Text
      category="interface"
      segment="content"
      type="medium"
      significance="subdued"
      colorScheme="building"
      className={Css.infoLine()}
    >
      {children}
    </Text>
  );
}
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
      props.onShow(new Utils.Event(props.joke, event));
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
        <Text category="interface" segment="title" type="minor" colorScheme="building" className={Css.header()}>
          {props.joke.name}
        </Text>

        <div className={Css.content(props.joke.image)}>
          {props.joke.text && !props.joke.image && (
            <Text category="interface" segment="content" type="medium" colorScheme="building" className={Css.text()}>
              {props.joke.text}
            </Text>
          )}
          {props.joke.imageUrl && <img src={props.joke.imageUrl} alt={props.joke.name} className={Css.image()} />}
        </div>
        <Line significance="subdued" />
        <InfoLine>
          {props.joke.uuIdentityName}, {props.joke.id}
        </InfoLine>
        <InfoLine>
          <DateTime value={props.joke.sys.cts} dateFormat="short" timeFormat="none" />
        </InfoLine>

        <Box significance="distinct" className={Css.footer()}>
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
