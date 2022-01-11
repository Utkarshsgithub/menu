import React from "react";

export default function Menu(props) {
  return (
    <div id="food-container">
      {props.items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div key={id} className="food-card">
            <img src={img} alt={title} />
            <div id="content">
              <div className="head1">
                <h4 style={{color: "midnightblue"}}>{title}</h4>
                <h4 className="price">Rs {price}</h4>
              </div>
              <p style={{marginTop: "10px"}}>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
