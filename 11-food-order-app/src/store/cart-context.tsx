import React from "react";

export type ItemObj = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

const CartContext = React.createContext({
  items: new Array<ItemObj>(),
  totalAmount: 0,
  addItem: (item: ItemObj) => {}, // 여기도 item에 대한 타입 동일하게
  removeItem: (id: string) => {},
});

export default CartContext;
