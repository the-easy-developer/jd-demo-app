import styled from "styled-components";

const DisplayPicture = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #f5bf42;
  line-height: 1.8;
  color: #fff;
  @media (max-width: 600px) {
    line-height: 2;
  }
`;

export default DisplayPicture;
