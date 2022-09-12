import React, { useState } from "react";

export default function Item(props) {
  const { items } = props;
  const [count, setCount] = useState(0);
  function HandleOnClick_rise() {
    setCount(count + 1);
  }
  function HandleOnClick_down() {
    setCount(count - 1);
  }

  return (
    <div className="item">
      {items.map((item) => (
        <>
          <img alt="item_img" src={item.image} />
          <div className="item-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
          <div className="item-quantity">
            <button
              className="item-button"
              disabled={count < 1}
              onClick={HandleOnClick_down}
            >
              -
            </button>
            <h3 className="item-total">{count}</h3>
            <button className="item-button" onClick={HandleOnClick_rise}>
              +
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
