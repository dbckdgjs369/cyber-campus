import styled from "@emotion/styled";

// export const PostType = styled(Chip)`
//   color: white;
// `;

export const NoticeBox = styled.div`
  border-top: 1px solid black;
  // border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  text-align: left;
  padding: 1rem;
  margin-right: 1rem;
`;

export const NoticeDiv = styled.div`
  // border: 1px solid black;
  margin: 1rem;
  border-right: 1px solid gray;
  width: 50%;
`;

export const LoginDiv = styled.div`
  border: 1px solid black;
  text-align: center;
  width: 50%;
`;
export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  width: 850px;
  height: 600px;

  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #e9e9e9;
  box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
`;
export const Loginpage = styled.div`
  font-family: "Noto Sans KR";
  color: #454545;
  background-color: #f6f6f5;
  font-size: 0.8125rem;
`;

export const FormControl = styled.input`
  display: block;
  width: 90%;
  margin: 1rem;
  padding: 0.45rem 0.9rem;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6c757d;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const LoginBtn = styled.button`
  background-color: #164194;
  border-color: #164194;
  color: white;
`;

// /* 파일 업로드 화면에서 썸네일 크기 수정 */
// #uploadBox table td.fileThumnail.img {
//   padding: 2px;
// }
// #uploadBox table td.fileThumnail.img img {
//   width: 100%;
// }

// /* URL 복사 버튼 커서 변경 */
// .link {
//   cursor: pointer;
// }

// /* 파일교체 팝업 진행상황 수정 */
// #uploadChangeBox .progress {
//   width: 100%;
//   height: 17px;
// }
// #uploadChangeBox .progress .progress-bar {
//   background-color: #0d6efd;
// }
// #uploadChangeBox .progress-percent {
//   width: 40px;
// }

// /* 콘텐츠 뷰어의 상세보기 */
// .detailViewAside.viewerAside {
//   z-index: 1040;
// }

// /* 콘텐츠 뷰어 좌우 이동 버튼 */
// .viewerMoveButton.moveLeftArea {
//   top: 30%;
//   left: 0%;
//   bottom: 30%;
//   width: 10%;
// }
// .viewerMoveButton.moveLeftArea .moveLeft {
//   left: 0%;
// }
// .viewerMoveButton.moveRightArea {
//   top: 30%;
//   right: 0%;
//   bottom: 30%;
//   width: 10%;
// }
// .viewerMoveButton.moveRightArea .moveRight {
//   right: 0%;
// }
// .viewerMoveButton > button.btn {
//   top: 50%;
//   position: absolute;
//   margin-top: -25px;
//   background-color: lightgray;
//   display: none;
// }

// /* 콘텐츠 뷰어 이미지 미리보기시 세로 스크롤 */
// .contentsViewer .viewerInner .view-item {
//   overflow: auto;
// }

// /* 이전으로 버튼 위치 조정 */
// .loginWrap .btn_prev {
//   top: 115px;
// }
