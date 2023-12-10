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
    list: PropTypes.shape({
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
    onShow: PropTypes.func,
    onCompleted: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
    onShow: () => {},
    onCompleted: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.list, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.list, event));
    }

    function handleShow(event) {
      props.onShow(new Utils.Event(props.list, event));
    }
    function handleCompleted(event) {
      props.onCompleted(new Utils.Event(props.list, event));
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
          {props.list.name}
        </Text>

        <div className={Css.content(props.list.image)}>
          {props.list.text && !props.list.image && (
            <Text category="interface" segment="content" type="medium" colorScheme="building" className={Css.text()}>
              {props.list.text}
            </Text>
          )}
          {props.list.imageUrl && <img src={props.list.imageUrl} alt={props.list.name} className={Css.image()} />}
        </div>
        <Line significance="subdued" />
        <InfoLine>
          {props.list.uuIdentityName}, {props.list.id}
        </InfoLine>
        <InfoLine>
          <DateTime value={props.list.sys.cts} dateFormat="short" timeFormat="none" />
        </InfoLine>

        <Box significance="distinct" className={Css.footer()}>
          {`Average rating: ${props.list.averageRating.toFixed(props.list.averageRating % 1 ? 1 : 0)} / 5`}
          <Button
            icon="uubmlstencil-uuappdesignkit-bullet-list"
            onClick={handleShow}
            significance="subdued"
            tooltip="Show list"
          />
          <Button icon="mdi-pencil" onClick={handleUpdate} significance="subdued" tooltip="Update" />
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
          <Button icon="mdi-check" onClick={handleCompleted} significance="subdued" tooltip="Move to completed lists" />
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
