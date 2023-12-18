//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config";
//@@viewOff:imports

const users = [
  {
    userID: 1,
    name: "Michal",
  },
  {
    userID: 2,
    name: "Michaela",
  },
  {
    userID: 3,
    name: "Anna",
  },
  {
    userID: 4,
    name: "Koudy",
  },
  {
    userID: 5,
    name: "Franta",
  },
];
//const mappedUsers = users.map();

const initialShopList = [
  {
    _id: "unique1",
    awid: "22222222222222222222222222222222",
    id: 10101010, //Utils.String.generateId(),
    name: "Seznam 1",
    text: "Nejaky popisek 1111233",
    shared: [
      {
        userID: 2,
      },
      {
        userID: 5,
      },
    ],
    owner: {
      userID: 1,
    },
    sys: { cts: "2023-10-11T09:48:38.990Z" },
    ingredience: [
      {
        ingID: 1,
        item: "Mrkev",
        quantity: "1kg",
        solved: false,
      },
      {
        ingID: 2,
        item: "Okurka",
        quantity: "2 ks",
        solved: true,
      },
      {
        ingID: 3,
        item: "Rum",
        quantity: "0.7l",
        solved: false,
      },
      {
        ingID: 4,
        item: "Pivo",
        quantity: "20 ks",
        solved: false,
      },
      {
        ingID: 5,
        item: "Rohlik",
        quantity: "10 ks",
        solved: false,
      },
    ],
  },
  {
    _id: "unique2",
    awid: "22222222222222222222222222222222",
    id: 10101011, //Utils.String.generateId(),
    name: "Seznam 2",
    text: "Nejaky popisek werty",
    shared: [
      {
        userID: 2,
      },
      {
        userID: 3,
      },
    ],
    owner: {
      userID: 1,
    },
    sys: { cts: "2023-10-11T09:48:38.990Z" },
    ingredience: [
      {
        ingID: 1,
        item: "Mrkev",
        quantity: "1kg",
        solved: false,
      },
      {
        ingID: 2,
        item: "Okurka",
        quantity: "2 ks",
        solved: true,
      },
      {
        ingID: 3,
        item: "Rum",
        quantity: "0.7l",
        solved: false,
      },
      {
        ingID: 4,
        item: "Pivo",
        quantity: "20 ks",
        solved: false,
      },
      {
        ingID: 5,
        item: "Rohlik",
        quantity: "10 ks",
        solved: false,
      },
    ],
  },
  {
    _id: "unique3",
    awid: "22222222222222222222222222222222",
    id: 10101012, //Utils.String.generateId(),
    name: "Seznam 3",
    text: "Nejaky popisek xfcv",
    shared: [
      {
        userID: 2,
      },
    ],
    owner: {
      userID: 1,
    },
    sys: { cts: "2023-10-11T09:48:38.990Z" },
    ingredience: [
      {
        ingID: 1,
        item: "Mrkev",
        quantity: "1kg",
        solved: false,
      },
      {
        ingID: 2,
        item: "Okurka",
        quantity: "2 ks",
        solved: true,
      },
      {
        ingID: 3,
        item: "Rum",
        quantity: "0.7l",
        solved: false,
      },
      {
        ingID: 4,
        item: "Pivo",
        quantity: "20 ks",
        solved: false,
      },
      {
        ingID: 5,
        item: "Rohlik",
        quantity: "10 ks",
        solved: false,
      },
    ],
  },
];

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
    const [shopList, setShopList] = useState(initialShopList);

    function remove(shopList) {
      setShopList((prevShopList) => prevShopList.filter((item) => item.id !== shopList.id));
    }

    function create(values) {
      const newList = {
        ...values,
        id: Utils.String.generateId(),
        averageRating: Math.round(Math.random() * 5), // <0, 5>
        uuIdentityName: "Gerald of Rivia",
        sys: {
          cts: new Date().toISOString(),
        },
      };

      setShopList((prevShopList) => [...prevShopList, newList]);
      return newList;
    }

    function update() {
      throw new Error("Shopping list update is not implemented yet.");
    }

    function show() {
      throw new Error("Showing shopping list is not implemented yet.");
    }
    function completed() {
      throw new Error("Complete function is not implemented yet.");
    }
    //@@viewOff:private

    //@@viewOn:render
    const value = { shopList, remove, update, create, show, completed };
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
