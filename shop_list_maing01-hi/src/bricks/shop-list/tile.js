//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useEffect } from "uu5g05";
import { Box, Text, Line, Button, DateTime, Pending } from "uu5g05-elements";
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
  /*propTypes: {
    list: PropTypes.shape({
      _id: PropTypes.string,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      shared: PropTypes.shape({
        userID: PropTypes.number.isRequired,
      }),
      owner: PropTypes.shape({
        userID: PropTypes.number.isRequired,
      }),
      sys: PropTypes.shape({
        cts: PropTypes.string,
      }),
      ingredience: PropTypes.shape({
        ingID: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        solved: Boolean,
      }),
    }).isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onShow: PropTypes.func,
    onCompleted: PropTypes.func,
  }*/
  propTypes: {
    ShopListDataObject: PropTypes.object.isRequired,
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
      props.onDelete(props.ShopListDataObject/*new Utils.Event(props.list, event)*/);
    }

    function handleUpdate(event) {
      props.onUpdate(props.ShopListDataObject/*new Utils.Event(props.list, event)*/);
    }

    function handleShow(event) {
      props.onShow(props.ShopListDataObject/*new Utils.Event(props.list, event)*/);
    }
    function handleCompleted(event) {
      props.onCompleted(props.ShopListDataObject/*new Utils.Event(props.list, event)*/);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    //const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const { elementProps } = Utils.VisualComponent.splitProps(props, Css.main());
    const list = props.jokeDataObject.data;
    const isActionDisabled = props.jokeDataObject.state === "pending";
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Tile);

    return (
      //currentNestingLevel ? (
      <Box {...elementProps}>
        <Text category="interface" segment="title" type="minor" colorScheme="building" className={Css.header()}>
          {/*props.*/list.name}
        </Text>
        <div className={Css.content(/*props.*/list.image)}>
          <Text category="interface" segment="content" type="medium" colorScheme="building" className={Css.text()}>
            {/*props.*/list.text}
          </Text>
        </div>

        <InfoLine>Owner: {/*props.*/list.owner.userID}</InfoLine>
        <InfoLine>Shared: {/*props.*/list.shared.userID}</InfoLine>
        <InfoLine>
          <DateTime value={/*props.*/list.sys.cts} dateFormat="short" timeFormat="none" />
        </InfoLine>
        <Box significance="distinct" className={Css.footer()}>
          <Button
            icon="uubmlstencil-uuappdesignkit-bullet-list"
            onClick={handleShow}
            significance="subdued"
            tooltip="Show list"
            disabled={isActionDisabled}
          />
          <Button icon="mdi-pencil" onClick={handleUpdate} significance="subdued" tooltip="Update" disabled={isActionDisabled}/>
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" disabled={isActionDisabled}/>
          <Button icon="mdi-check" onClick={handleCompleted} significance="subdued" tooltip="Move to completed lists" disabled={isActionDisabled}/>
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
