import ShopList from "shop_list_maing01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`ShopList.Bricks.ShopList.Tile`, () => {
  testProperties(ShopList.Bricks.ShopList.Tile, CONFIG);
});
