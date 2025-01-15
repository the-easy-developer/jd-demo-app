import styled from "styled-components";

const rankBgColor = ['rgba(245, 29, 22, 1)', 'rgba(242, 76, 70, 1)', 'rgba(255, 110, 105, 1)'];
const Rank = styled.div<{$rank: number}>`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  line-height: 1;
  background-color: ${props => props.$rank > 2 ? 'rgba(105, 203, 255, 1)' : rankBgColor[props.$rank]};
  
  @media (max-width: 600px) {
    line-height: 1.5;
  }
`;

export default Rank;
