import React from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Button } from "./style";

export default function PageArrow() {
  return (
    <div
      style={{
        border: "1PX SOLID BLACK",
        display: "inline-block",
      }}
    >
      <Button>
        <ChevronLeftOutlinedIcon
          style={{
            width: "40px",
            height: "40px",
            // textAlign: "center",
            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // marginLeft: "-20px",
            // marginTop: "-20px",
          }}
        />
      </Button>
      <Button></Button>
      <Button>
        <ChevronRightOutlinedIcon
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: "-20px",
            marginTop: "-20px",
          }}
        />
      </Button>
    </div>
  );
}
