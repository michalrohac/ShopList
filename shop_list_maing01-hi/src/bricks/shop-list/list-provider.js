//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config";
//@@viewOff:imports

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [jokeList, setJokeList] = useState(initialJokeList);

    function remove(joke) {
      setJokeList((prevJokeList) => prevJokeList.filter((item) => item.id !== joke.id));
    }

    function create(values) {
      const joke = {
        ...values,
        id: Utils.String.generateId(),
        averageRating: Math.round(Math.random() * 5), // <0, 5>
        uuIdentityName: "Gerald of Rivia",
        sys: {
          cts: new Date().toISOString(),
        },
      };

      setJokeList((prevJokeList) => [...prevJokeList, joke]);
      return joke;
    }

    function update() {
      throw new Error("Joke update is not implemented yet.");
    }

    function show() {
      throw new Error("Test.");
    }
    //@@viewOff:private

    //@@viewOn:render
    const value = { jokeList, remove, update, create, show };
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
