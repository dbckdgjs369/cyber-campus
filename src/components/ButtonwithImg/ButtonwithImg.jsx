import React from "react";

export default function ButtonwithImg(props) {
  return (
    <div
      style={{
        width: "23%",
        height: "70px",
        borderRight: "1px solid gray",
        paddingRight: "3px",
        display: "inline-block",
        marginRight: "2rem",
        paddingRight: "2rem",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "100%",
          float: "left",
        }}
      >
        {props.icon}
      </div>
      <div style={{}}>{props.content}</div>
      <div
        style={{
          float: "right",
          width: "50px",
        }}
      >
        <div style={{ fontSize: "30px", float: "left" }}>{props.number}</div>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            float: "right",
            marginTop: "12px",
          }}
        >
          건
        </div>
      </div>
    </div>
  );
}
