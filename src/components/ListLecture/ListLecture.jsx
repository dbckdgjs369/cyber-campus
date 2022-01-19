import React from "react";
import { ClassificationDiv } from "./style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ListLecture(props) {
  return (
    <div
      style={{
        height: "5rem",
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        padding: "10px",
        borderRadius: "3px",
        flexDirection: "row",
        marginBottom: "2rem",
      }}
    >
      <ClassificationDiv>{props.classification}</ClassificationDiv>
      <div style={{ flex: "10" }}>
        <h5
          style={{
            fontWeight: "bold",
            padding: "0",
            margin: "0",
            justifySelf: "flex-start",
          }}
        >
          {props.title}
        </h5>
      </div>
      <div
        style={{
          fontSize: "15px",
          padding: "0",
          margin: "0",
          flex: "3",
        }}
      >
        {props.profinfo} | {props.class}
      </div>
      <div
        style={{
          fontSize: "15px",
          padding: "0",
          margin: "0",
          marginLeft: "60px",
        }}
      >
        {props.grade}
      </div>
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: "#164194",
          marginLeft: "6rem",
        }}
      >
        <ChevronRightIcon style={{ color: "white" }} />
      </div>
    </div>
  );
}
