import styled from "styled-components";

const BoardItem = styled.div<{ $index: number, $last: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 16px;
  transition: top 1s ease-in-out;
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

  top: ${props => `${props.$index * 40}px`};
  background-color: ${props => props.$index % 2 === 0 ? "rgba(241, 255, 253, 1)" : "rgba(216, 255, 249, 1)"};
  border-top-right-radius: ${props => props.$index === 0 ? "inherit" : "0px"};
  border-top-left-radius: ${props => props.$index === 0 ? "inherit" : "0px"};
  border-bottom-right-radius: ${props => props.$last ? "inherit" : "0px"};
  border-bottom-left-radius: ${props => props.$last ? "inherit" : "0px"};

  & > div:first-child {
    display: flex;
    gap: 8px;
    height: 100%;
    align-items: center;
  }
`;

export default BoardItem;
