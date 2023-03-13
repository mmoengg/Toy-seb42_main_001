import styled from "styled-components";

import BoardAuthorInfo from "../components/Board/BoardAuthorInfo";
import BoardDetailTitle from "../components/Board/BoardDetailTitle";
import BoardLikes from "../components/Board/BoardLikes";
import BoardComments from "../components/Board/BoardComments";
import More from "../components/UI/More";
import BoardDetailContents from "../components/Board/BoardDetailContents";
import BoardTags from "../components/Board/BoardTags";
import Comment from "../components/UI/Comment/Comment";
import CommentInput from "../components/UI/Comment/CommentInput";
import CommentSubmitBtn from "../components/UI/Comment/CommentSubmitBtn";

function BoardDetail() {
  return (
    <Wrapper>
      <BoardDetailContainer>
        <BoardAuthorInfo />
        <BoardDetailHeader>
          <BoardDetailTitle />
          <BoardDetailController>
            <BoardLikes />
            <BoardComments />
            <More />
          </BoardDetailController>
        </BoardDetailHeader>
        <BoardDetailBody>
          <BoardDetailContents />
          <BoardTags />
        </BoardDetailBody>
      </BoardDetailContainer>
      <BoardCommentsContainer>
        <CommentsCount>Comments 2</CommentsCount>
        <CommentInputContainer>
          <CommentInput />
          <CommentSubmitBtn />
        </CommentInputContainer>
        <ListContainer>
          <Comment />
          <Comment />
        </ListContainer>
      </BoardCommentsContainer>
    </Wrapper>
  );
}

export default BoardDetail;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardDetailContainer = styled.div`
  width: calc(100% / 18 * 12);
  background-color: var(--color-white);
  padding: 105px 0 95px 0;
`;

const BoardCommentsContainer = styled.div`
  width: calc(100% / 18 * 12);
  background-color: var(--color-sub-gray);
  padding: 55px 0 200px 0;
`;

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 0 45px 0;
  border-bottom: 0.5px solid #bababa;
`;

const BoardDetailController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 50px 0;
`;

const CommentsCount = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-small);
  line-height: 16px;
`;
