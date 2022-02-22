import React from "react";
import { LoginBtn, Login, NoticeBox, A, Span } from "./style";
import { NoticeDiv } from "./style";
import { LoginDiv } from "./style";
import { CenterDiv, Ul, p } from "./style";
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
    <Login>
      <CenterDiv>
        <NoticeDiv>
          <h3
            style={{
              textAlign: "left",
              fontSize: "1.125rem",
              // whiteSpace: "nowrap",
            }}
          >
            <b>공지사항</b>
          </h3>
          <Ul>
            <NoticeBox>
              <li style={{ textAlign: "-webkit-match-parent" }}>
                <A href="https://homepage.cnu.ac.kr/udec/info/notice.do?mode=view&articleNo=265180">
                  대전·충남 이러닝 학점 교류 로그인 안내
                </A>
                <Span>
                  로그인 방법 1. 대전충남 학점교류 선택2. 소속 학교 선택 3.
                  아이디: 소속 학교 학번 4. 비밀번호: 생년월일 6자리(예: 091212)
                </Span>
                <span style={{ color: "#98a6ad" }}>
                  <AccessTimeIcon
                    style={{
                      fontSize: "20px",
                      marginRight: "2px",
                    }}
                  />
                  2021-09-01
                </span>
              </li>
            </NoticeBox>
            <NoticeBox style={{ textOverflow: "ellipsis" }}>
              <li style={{ textAlign: "-webkit-match-parent" }}>
                <A href="https://udec.cnu.ac.kr/udec/info/notice.do?mode=view&articleNo=255200">
                  신규 사이버 캠퍼스 로그인 관련 안내입니다.
                </A>
                <Span
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    wordBreak: "break-word",
                    WebkitLineClamp: "2",
                  }}
                >
                  1. 대학 선택 (인터넷 익스플로러 지원하지 않음) 2. 아이디:
                  학번/교번 3. 비밀번호: 생년월일 6자리 충남대학교 소속
                  학생/교원은 포털시스템에서 SSO로 연동 진행중에 있습니다.
                  비밀번호 변경은 비밀번호 찾기 기능을 보완하여 수정할 수 있도록
                  하겠습니다. (ex, 비밀번호 찾기는 포털 아이디/비밀번호 인증 후
                  변경 등)
                </Span>
                <span style={{ color: "#98a6ad" }}>
                  <AccessTimeIcon
                    style={{
                      fontSize: "20px",
                      marginRight: "2px",
                    }}
                  />
                  2021-08-11
                </span>
              </li>
            </NoticeBox>
            <NoticeBox>
              <li style={{ textAlign: "-webkit-match-parent" }}>
                <A href="https://homepage.cnu.ac.kr/udec/info/notice.do?mode=view&articleNo=240016">
                  대학원격 교육지원센터 릴레이 포럼(제1회)개최 안내
                </A>
                <Span style={{ overflow: "hidden" }}>
                  대학원격교육지원센터 릴레이 포럼(제1회) 개요 1. 일시 : 2021.
                  8. 6.(금), 10:00 ~ 11:30 2. 목적 : 대학 간 원격교육 관련 사례
                  공유를 통한 교류 활성화 촉진 및 대학원격교육지원센터 발전 방안
                  모색
                </Span>
                <span style={{ color: "#98a6ad" }}>
                  <AccessTimeIcon
                    style={{
                      fontSize: "20px",
                      marginRight: "2px",
                    }}
                  />
                  2021-08-02
                </span>
              </li>
            </NoticeBox>
            <NoticeBox style={{ borderBottom: "1px solid #DDDDDD" }}>
              <A href="https://homepage.cnu.ac.kr/udec/info/notice.do?mode=view&articleNo=216223">
                대학원격교육지원센터 IGNITE콘퍼런스 개최 안내
              </A>
              <Span>
                대학원격교육지원센터 IGNITE 콘퍼런스 개최 안내 1. 관련:
                고등평생교육부-2331(2021.05.27.) 2. 위와 관련하여
                대학원격교육지원센터 설치·운영 사업 계획 공유 및 대학원격교육
                발전 방안 모색을 위해 「대학원격교육지원센터 IGNITE 콘퍼런스」를
                다음과 같이 개최하오니 많은 관심과 참석 부탁드립니다.
              </Span>
              <span style={{ color: "#98a6ad" }}>
                <AccessTimeIcon
                  style={{
                    fontSize: "20px",
                    marginRight: "2px",
                  }}
                />
                2021-06-01
              </span>
            </NoticeBox>
          </Ul>
        </NoticeDiv>
        <LoginDiv>
          <div>
            <span>
              <img
                src="image/logo.png"
                alt="로고"
                style={{ width: "100%", height: "52px", minHeight: "52px" }}
              ></img>
            </span>
            <DropDown />
            <div
              style={{
                borderWidth: "0 0 1px 0",
                paddingTop: "7px",
                paddingBottom: "7px",
                borderColor: "#d0d9ea",
              }}
            >
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                style={{ width: "100%" }}
              />
            </div>
            <br /> <br />
            <Input
              id="input-with-icon-adornment"
              style={{ width: "100%" }}
              startAdornment={
                <InputAdornment
                  position="start"
                  style={{ hover: "blue", width: "100%" }}
                >
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
          <p>
            로그인에 문제가 있을경우
            <a
              href="https://udec.cnu.ac.kr/udec/use/URL.do"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>
                <u>소속 학교/기관의 담당 부서</u>
              </strong>
            </a>
            에 문의해 주시기 바랍니다.
          </p>
        </LoginDiv>
      </CenterDiv>
    </Login>
  );
}
