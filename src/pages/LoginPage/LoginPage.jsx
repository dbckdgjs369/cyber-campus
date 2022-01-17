import React from "react";
import { LoginBtn, Loginpage, NoticeBox } from "./style";
import { NoticeDiv } from "./style";
import { LoginDiv } from "./style";
import { CenterDiv } from "./style";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "../../components/DropDown/DropDown";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Loginpage>
      <CenterDiv xs={12} md={4}>
        <NoticeDiv>
          <h6 style={{ textAlign: "left" }}>
            <b>공지사항</b>
          </h6>
          <NoticeBox>
            대전·충남 이러닝 학점 교류 로그인 안내
            <br />
            <AccessTimeIcon />
          </NoticeBox>

          <NoticeBox>
            신규 사이버 캠퍼스 로그인 관련 안내입니다. <br />
            <AccessTimeIcon />
          </NoticeBox>
          <NoticeBox>
            대학원격 교육지원센터 릴레이 포럼(제1회)개최 안내 <br />
            <AccessTimeIcon />
          </NoticeBox>
          <NoticeBox style={{ borderBottom: "1px solid black" }}>
            대학원격교육지원센터 IGNITE콘퍼런스 개최 안내 <br />
            <AccessTimeIcon />
          </NoticeBox>
        </NoticeDiv>
        <LoginDiv xs={6} md={4}>
          <div>
            <img src="image/logo.png" alt="로고" style={{ width: "70%" }}></img>
            <DropDown />
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <br /> <br />
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start" style={{ hover: "blue" }}>
                  <LockIcon />
                </InputAdornment>
              }
            />
            <br />
            <br />
            <Link to="/todo">
              <LoginBtn>로그인</LoginBtn>
            </Link>
          </div>
          {/* <h6>
            로그인에 문제가 있을경우 소속학교/기관의 담당 부서에 문의해 주시기
            바랍니다.
          </h6> */}
        </LoginDiv>
      </CenterDiv>
    </Loginpage>
  );
}
