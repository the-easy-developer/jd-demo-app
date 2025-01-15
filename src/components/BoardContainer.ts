import styled from "styled-components";

const BoardContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;

  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, .2);

  @media (max-width: 600px) {
    width: 100vw;
    border-radius: 0px;
    // box-shadow: none;
  }
`;

export default BoardContainer;
