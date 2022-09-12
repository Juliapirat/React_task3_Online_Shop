import React from "react";
import Item from "./Item";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image:
        "https://www.pharmaplast-online.net/wp-content/uploads/masks-blue-10.jpg"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://wilara.lt/wp-content/uploads/2016/05/lateksines.jpg"
    }
  ];
  return (
    <div className="shop">
      <Item items={items} />
    </div>
  );
};

export default Shop;
