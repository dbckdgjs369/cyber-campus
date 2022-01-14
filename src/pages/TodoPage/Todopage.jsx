import React, { useState } from "react";
import ButtonwithImg from "../../components/ButtonwithImg/ButtonwithImg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { MainDiv } from "../../layouts/Mainlayout/style";
import InventoryIcon from "@mui/icons-material/Inventory";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ForumIcon from "@mui/icons-material/Forum";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import PageArrow from "../../components/PageArrow/PageArrow";


import {
  DropDown,
  NoticeDiv,
  QnADiv,
  SelectDiv,
  TodoDiv,
  Text,
  InnerDiv,
} from "./style";

export default function TodoPage() {
  const [isEmpty, setisEmpty] = useState(true);
  return (
    <div>
      <NavBar></NavBar>
      <MainDiv>
        <SelectDiv>
          <DropDown>
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
          <InnerDiv>
            <Text>마감 1일전</Text>
            <Text>진행 가능한 학습</Text>
            <Text>완료한 학습</Text>
            <Text>미완료한 학습</Text>
          </InnerDiv>
        </SelectDiv>
        <TodoDiv>
          <ButtonwithImg
            icon={
              <InventoryIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#c6ced9" }}
              />
            }
            number="1"
            content="전체"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <OndemandVideoIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#fef3cd" }}
              />
            }
            number="2"
            content="콘텐츠"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <ForumIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#fdedd1" }}
              />
            }
            number="1"
            content="토론"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <FolderOpenIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#d7f5e1" }}
              />
            }
            number="1"
            content="자료실"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <MenuBookIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#afe0de" }}
              />
            }
            number="1"
            content="과제"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <GroupsIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#b3d6f3" }}
              />
            }
            number="1"
            content="팀프로젝트"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <QuestionMarkIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#cceafb" }}
              />
            }
            number="1"
            content="퀴즈"
          ></ButtonwithImg>
          <ButtonwithImg
            icon={
              <CreateOutlinedIcon
                fontSize="large"
                style={{ width: "3rem", height: "3rem", color: "#f7cacd" }}
              />
            }
            number="1"
            content="시험"
          ></ButtonwithImg>
          <div
            style={{
              clear: "both",
              marginTop: "1rem",
              minHeight: "20vh",
              height: "auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                height: "100%",
                marginTop: "50px",
                fontSize: "12px",
                borderBottom: "1px solid #d0d9ea",
                borderTop: "1px solid #d0d9ea",
                minHeight: "20vh",
              }}
            >
              {isEmpty && (
                <div>
                  <FolderSpecialOutlinedIcon
                    fontSize="large"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      color: "#dfe5f0",
                      marginTop: "20px",
                    }}
                  />
                  <p>확인할 내역이 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        </TodoDiv>
        <h6 style={{ fontWeight: "bold" }}>공지사항</h6>
        <TodoDiv>
          <div
            style={{
              textAlign: "center",
              height: "100%",
              marginTop: "50px",
              fontSize: "12px",
              borderBottom: "1px solid #d0d9ea",
            }}
          >
            {isEmpty && (
              <div>
                <FolderSpecialOutlinedIcon
                  fontSize="large"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    color: "#dfe5f0",
                    marginTop: "5%",
                  }}
                />
                <p>확인할 내역이 없습니다.</p>
              </div>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            <PageArrow style={{ left: "50%", top: "50%" }} />
          </div>
        </TodoDiv>
        <h6 style={{ fontWeight: "bold" }}>Q&A</h6>
        <TodoDiv>
          <div
            style={{
              textAlign: "center",
              height: "100%",
              marginTop: "50px",
              fontSize: "12px",
              borderBottom: "1px solid #d0d9ea",
            }}
          >
            {isEmpty && (
              <div>
                <FolderSpecialOutlinedIcon
                  fontSize="large"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    color: "#dfe5f0",
                    marginTop: "5%",
                  }}
                />
                <p>확인할 내역이 없습니다.</p>
              </div>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            <PageArrow />
          </div>
        </TodoDiv>
              borderTop: "1px solid black",
            }}
          ></div>
        </TodoDiv>
        <h6 style={{ fontWeight: "bold" }}>공지사항</h6>
        <TodoDiv></TodoDiv>
        <h6 style={{ fontWeight: "bold" }}>Q&A</h6>
        <TodoDiv></TodoDiv>
        <Footer></Footer>
      </MainDiv>
    </div>
  );
}
