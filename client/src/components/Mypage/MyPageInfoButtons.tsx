import styled from "styled-components";

import MyPageButton from "./MyPageButton";

interface MyPageInfoButtonsProps {
  onClick?: () => void;
}

const MyPageInfoButtons = ({ onClick }: MyPageInfoButtonsProps) => {
  return (
    <MyPageInfoButtonContainer>
      <MyPageButton onClick={onClick}>회원 정보 수정</MyPageButton>
      <MyPageButton>로그아웃</MyPageButton>
      <MyPageButton>회원 탈퇴</MyPageButton>
    </MyPageInfoButtonContainer>
  );
};

export default MyPageInfoButtons;

const MyPageInfoButtonContainer = styled.div`
  width: 95%;
  max-width: 450px;
  height: 200px;
  margin-top: var(--xx-large);
  margin-bottom: var(--x-large);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
