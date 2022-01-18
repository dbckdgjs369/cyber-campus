import React from "react";
import {
  ClassificationDiv,
  Div,
  Progress,
  ProgressDiv,
  Progressnumber,
} from "./style";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function Lecture(props) {
  return (
    <Div>
      <div style={{ borderBottom: "1px solid black", marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            marginBottom: "1rem",
          }}
        >
          <ClassificationDiv>{props.classification}</ClassificationDiv>
          <div style={{ marginLeft: "140px", fontWeight: "bold" }}>
            {props.grade}
          </div>
        </div>
        <div style={{ height: "60px" }}>
          <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
        </div>
        <div style={{ marginTop: "1rem", height: "60px" }}>
          <p style={{ fontSize: "15px" }}>
            {props.profinfo} | {props.class}
          </p>
        </div>
      </div>
      <div>
        <ProgressDiv>
          <Progress style={{ borderRadius: "0.25rem 0 0 0.25rem" }}> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress> </Progress>
          <Progress style={{ borderRadius: "0 0.25rem 0.25rem 0" }}> </Progress>
        </ProgressDiv>
        <ProgressDiv style={{ marginTop: "0px" }}>
          <Progressnumber>1</Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber>5</Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber>10</Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber> </Progressnumber>
          <Progressnumber>15</Progressnumber>
        </ProgressDiv>
        <div>
          <div>
            <div
              style={{
                border: "1px solid #DCE3EF",
                display: "flex",
                borderRadius: "3px",
                height: "55px",
                marginTop: "1rem",
                justifyContent: "center",
                alignItems: "center",
                flexBasis: "0",
              }}
            >
              <ChevronLeftOutlinedIcon style={{ flex: "1", flexBasis: "0" }} />
              <div
                style={{
                  flex: "12",
                  flexBasis: "0",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#C2CDDE",
                }}
              >
                학습이 종료된 강의입니다.
              </div>
              <ChevronRightOutlinedIcon style={{ flex: "1", flexBasis: "0" }} />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}
