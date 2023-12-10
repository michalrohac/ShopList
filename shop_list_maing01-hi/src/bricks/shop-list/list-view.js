//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import Config from "./config/config.js";
//@@viewOff:imports

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shopList: PropTypes.array.isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onShow: PropTypes.func,
    onCompleted: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shopList: [],
    onUpdate: () => {},
    onDelete: () => {},
    onShow: () => {},
    onCompleted: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    function handleDelete(event) {
      const list = event.data;

      try {
        props.onDelete(list);
        addAlert({
          message: `Shopping list - ${list.name} - has been deleted.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting shopping list", error);
        showError(error, "Cannot delete selected shopping list!");
      }
    }

    function handleUpdate(event) {
      try {
        props.onUpdate(event.data);
      } catch (error) {
        ListView.logger.error("Error updating shopping list", error);
        showError(error, "Shopping list update failed!");
      }
    }

    function handleShow(event) {
      try {
        props.onShow(event.data);
      } catch (error) {
        ListView.logger.error("Error displaying required shopping list", error);
        showError(error, "Shopping list cannot be shown!");
      }
    }
    function handleCompleted(event) {
      try {
        props.completed(event.data);
      } catch (error) {
        ListView.logger.error("Cannot complete the list", error);
        showError(error, "Shopping list cannotbe completed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs}>
        {props.shopList.map((list) => (
          <Tile
            key={list.id}
            list={list}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onShow={handleShow}
            onCompleted={handleCompleted}
            style={{ width: 640, margin: "24px auto" }}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports
