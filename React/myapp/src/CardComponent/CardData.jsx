import React from "react";

function CardData({ img, title }) {
  return (
    <div className="col">
      <div className="shadow border">
        <img src={img} alt={title} className="w-100 object-fit-cover" style={{height:250}} />
        <h3 className="p-2">{title}</h3>
      </div>
    </div>
  );
}

export default CardData;
