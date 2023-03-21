import styled from "styled-components";

interface BoardContentsProps {
  title?: string;
  content?: string;
}

function BoardContents({ title, content }: BoardContentsProps) {
  return (
    <BoardContentsContainer>
      <BoardContentsTitle>{title}</BoardContentsTitle>
      <BoardContentsBody>{content}</BoardContentsBody>
    </BoardContentsContainer>
  );
}

export default BoardContents;

const BoardContentsContainer = styled.div`
  margin: var(--medium) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
`;

const BoardContentsTitle = styled.div`
  margin-bottom: var(--x-small);
  font-size: var(--medium);
  font-weight: var(--weight-large);
`;

const BoardContentsBody = styled.div`
  line-height: var(--medium);
  font-size: var(--x-small);
  font-weight: var(--weight-x-small);
`;
