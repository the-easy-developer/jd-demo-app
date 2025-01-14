import { useEffect, useRef } from "react";
import styled from "styled-components";

import usePrevious from "../utils/usePrevious";
import animateValue from "../utils/animateValue";

const ScoreUI = styled.div`
  position: absolute;
  font-weight: 700;
  right: 4px;

  & > span:last-child {
    font-weight: normal;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export default function Score({ score }: { score: number; }) {
  const divRef = useRef<HTMLDivElement>(null);

  const prevScore = usePrevious(score);

  useEffect(() => {
    if (!prevScore || score === prevScore) {
      return;
    }
    animateValue(divRef.current!, prevScore, score, 1000);
  }, [score, prevScore]);

  return <ScoreUI ref={divRef}> <span> {score} </span> <span> points </span> </ScoreUI>;
}
