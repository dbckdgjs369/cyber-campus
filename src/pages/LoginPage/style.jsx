import styled from "@emotion/styled";

export const Login = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  color: #454545;
  background-color: #f6f6f6;
  font-size: 0.8125rem;
`;

export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  width: 850px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #e9e9e9;
  box-shadow: 0 10px 30px rgb(0 0 0 / 10%);

  @media (max-width: 991.98px) {
    width: 90%;
    flex-flow: row wrap;
  }
`;

export const NoticeBox = styled.div`
  border-top: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  text-align: left;
  padding: 15px;
  margin-right: 1rem;
`;

export const NoticeDiv = styled.div`
  position: relative;
  flex: 1;
  padding: 0 5px;
  border-right: 1px solid #eeeeee;
  @media (max-width: 990px) {
    margin-bottom: 20px;
    border-right: solid 0px #eee;
  }
  @media (max-width: 991.98px) {
    flex: none;
    width: 100%;
    padding: 0;
  }
`;

export const LoginDiv = styled.div`
  position: relative;
  flex: 1;
  padding: 0 20px;
  @media only screen and(max-width:990px) {
    flex: none;
    width: 100%;
    padding: 0;
  }
`;

export const Img = styled.img`
  height: 52px;
  minheight: 52px;
`;
export const ImageSpan = styled.span`
  height: 52px;
  minheight: 52px;
  @media (max-width: 991.98px) {
    display: none;
  }
  @media (max-width: 660px) {
    display: block;
  }
`;

export const LoginBtn = styled.button`
  background-color: #164194;
  border-color: #164194;
  color: white;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
`;
export const Ul = styled.ul`
  list-style: none;
  padding-left: 0px;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;
export const A = styled.a`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  color: black;
  text-decoration: none;
  letter-spacing: -1px;
  word-spacing: -2px;
  display: block;
`;

export const Span = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* ellipsis line */
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
  font-size: 0.8125rem;
  @media (max-width: 991.98px) {
    height: 30px;
    display: none;
  }
  @media (max-width: 660px) {
    display: block;
  }
`;
