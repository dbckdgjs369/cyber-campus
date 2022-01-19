import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { MainDiv } from "../../layouts/Mainlayout/style";
import { DropDown, Innerdiv, P, Square } from "./style";
import GridViewIcon from "@mui/icons-material/GridView";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CardTypeLecture from "../../components/CardTypeLecture/CardTypeLecture";
import ListTypeLecture from "../../components/ListTypeLecture/ListTypeLecture";

export default function LectureRoomPage() {
  const [showStyle, setshowStyle] = useState(false);
  const changeStyle = () => {
    if (showStyle === false) {
      setshowStyle(true);
    } else {
      setshowStyle(false);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <MainDiv style={{ minHeight: "87.5vh", height: "auto" }}>
        <div style={{ justifyContent: "space-between" }}>
          <Innerdiv style={{ marginRight: "3rem" }}>
            <p style={{ fontWeight: "bold" }}>공지사항</p>
          </Innerdiv>
          <Innerdiv>
            <p style={{ fontWeight: "bold" }}>자료실</p>
          </Innerdiv>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
          }}
        >
          <DropDown style={{ float: "left" }}>
            <option key="2021_wi" value="2021_wi">
              2021년 겨울학기
            </option>
            <option key="2022_sp" value="2022_sp">
              2022년 특별학기
            </option>
            <option key="2021_2" value="2021_2">
              2021년 2학기
            </option>
            <option key="2021_su" value="2021_su">
              2021년 여름학기
            </option>
            <option key="2021_1" value="2021_1">
              2021년 1학기
            </option>
            <option key="2020_1" value="2020_1">
              2020년 1학기
            </option>
          </DropDown>
          <div style={{ float: "right", display: "inline-block" }}>
            <div style={{ float: "left", marginTop: "5px" }}>
              <Square
                style={{
                  backgroundColor: "#46a5fd",
                  marginTop: "3px",
                  marginRight: "2px",
                }}
              ></Square>
              <P>출석</P>
            </div>
            <div
              style={{ float: "left", marginLeft: "1rem", marginTop: "5px" }}
            >
              <Square
                style={{
                  backgroundColor: "#25c189",
                  marginTop: "3px",
                  marginRight: "2px",
                }}
              ></Square>
              <P>지각</P>
            </div>
            <div
              style={{ float: "left", marginLeft: "1rem", marginTop: "5px" }}
            >
              <Square
                style={{
                  backgroundColor: "#fb8171",
                  marginTop: "3px",
                  marginRight: "2px",
                }}
              ></Square>
              <P>미완료</P>
            </div>
            <div
              style={{ float: "left", marginLeft: "1rem", marginTop: "5px" }}
            >
              <Square
                style={{
                  backgroundColor: "#777777",
                  marginTop: "3px",
                  marginRight: "2px",
                }}
              ></Square>
              <P>학습중</P>
            </div>
            <button
              style={{
                marginRight: "3px",
                marginLeft: "1rem",
                width: "35px",
                height: "35px",
                borderRadius: "3px",
                border: "1px solid #164194",
                backgroundColor: "white",
              }}
              onClick={changeStyle}
            >
              <GridViewIcon
                style={{
                  paddingRight: "3px",
                  paddingBottom: "4px",
                  margin: "0 auto",
                  color: "#164194",
                }}
              />
            </button>
            <button
              style={{
                marginRight: "4px",
                width: "35px",
                height: "35px",
                borderRadius: "3px",
                border: "1px solid #164194",
                backgroundColor: "white",
              }}
              onClick={changeStyle}
            >
              <DensityMediumIcon
                style={{
                  paddingRight: "5px",
                  color: "#164194",
                  margin: "0 auto",
                  paddingBottom: "4px",
                }}
              />
            </button>
          </div>
        </div>
        <div>
          {showStyle && <CardTypeLecture />}
          {!showStyle && <ListTypeLecture />}
        </div>
        <Footer></Footer>
      </MainDiv>
    </div>
  );
}
