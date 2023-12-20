//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useRef } from "uu5g05";
import { Button, Pending, useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import Config from "./config/config.js";
//@@viewOff:imports

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  /*propTypes: {
    shopList: PropTypes.array.isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onShow: PropTypes.func,
    onCompleted: PropTypes.func,
  },*/
  propTypes: {
    ShopListData: PropTypes.object.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {/*
    shopList: [],
    onUpdate: () => {},
    onDelete: () => {},
    onShow: () => {},
    onCompleted: () => {},
*/},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();
    const nextPageIndexRef = useRef(1);

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    async function handleDelete(ShopListData) {
      //const list = ShopListData.data;

      try {
        await ShopListData.handlerMap.delete();
        /*
        props.onDelete(list);
        addAlert({
          message: `Shopping list - ${list.name} - has been deleted.`,
          priority: "success",
          durationMs: 2000,
        });*/
      } catch (error) {
        ListView.logger.error("Error deleting shopping list", error);
        showError(error, "Cannot delete selected shopping list!");
        return;
      }
      addAlert({
        message: `Shopping list: ${ShopListData.data.name} has been deleted.`,
        priority: "success",
        durationMs: 2000,
      });

    }

    async function handleUpdate(event) {
      try {
        await ShopListData.handlerMap.update();
        //props.onUpdate(event.data);
      } catch (error) {
        ListView.logger.error("Error updating shopping list", error);
        showError(error, "Shopping list update failed!");
      }
    }
    async function handleLoadNext() {
      try {
        await props.ShopListData.handlerMap.loadNext({ pageInfo: { pageIndex: nextPageIndexRef.current } });
        nextPageIndexRef.current++;
      } catch (error) {
        ListView.logger.error("Error loading next page", error);
        showError(error, "Page loading failed!");
      }
    }

    async function handleShow(event) {
      try {
        await ShopListData.handlerMap.show();
      } catch (error) {
        ListView.logger.error("Error displaying required shopping list", error);
        showError(error, "Shopping list cannot be shown!");
      }
    }
    async function handleCompleted(event) {
      try {
        await ShopListData.handlerMap.complete();
        //props.completed(event.data);
      } catch (error) {
        ListView.logger.error("Cannot complete the list", error);
        showError(error, "Shopping list cannotbe completed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    const shopList = props.ShopListData.data.filter((item) => item !== undefined);

    return (
      <div {...attrs}>
        {/*props.*/shopList.map((list) => (
          <Tile
            key={list.data.id}
            ShopListDataObject={list}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onShow={handleShow}
            onCompleted={handleCompleted}
            /*style={{ width: 640, margin: "24px auto" }}*/
          />
        ))}
        <div>
          {props.ShopListData.state !== "pending" && (
            <Button colorScheme="primary" onClick={handleLoadNext}>
              Load next
            </Button>
          )}
          {props.ShopListDataList.state === "pending" && <Pending />}
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports
