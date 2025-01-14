import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

import data from '../data.json';

import Score from "./Score";

const Item = styled.div<{$index: number}>`
  display: flex;
  gap: 10px;
  height: 40px;
  align-items: center;
  padding: 0px 4px;
  transition: top 1s ease-in-out;
  position: absolute;
  width: 100%;
  top: ${props => `${props.$index * 40}px`};
  border-bottom: 1px solid #ccc;
  background-color: ${props => props.$index % 2 === 0 ? "#e8faf7" : "#b3f5ea"};
  box-sizing: border-box;
`;

const DisplayPicture = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #f5bf42;
  line-height: 1.8;
  color: #fff;
`;

const Container = styled.div`
  width: 600px;
  height: 400px;
  position: relative;

  @media (max-width: 600px) {
    max-width: 100vw;
  }
`;

const relevantData = data.map(d => [d.userID, d.score]) as [string, number][];

export default function Board() {
  const [list, setList] = useState<[string, number][]>(relevantData);

  // just a quick way to find score / position based on userId
  const scoreMap = useMemo(() => {
    return list.reduce((acc, cur, position) => {
      acc[cur[0]] = { score: cur[1], position };
      return acc;
    }, {} as {[key: string]: { score: number; position: number; }});
  }, [list]);

  useEffect(() => {
    /** effect to increase points */
    const randomIndex = Math.ceil(Math.random() * list.length);
    const randomId = `u-${randomIndex}`;
    const scoreIncrement = Math.floor(Math.random() * 500);

    const item = list.find(([userId]) => userId === randomId)!;

    const newList = list.concat().map(l => l.concat()) as [string, number][];
    newList[newList.findIndex(([userId]) => userId === item[0])!][1] = item[1] + scoreIncrement;
    newList.sort((a, b) => b[1] - a[1]);

    const timeoutId = setTimeout(() => {
      setList(newList);
    }, 1000);

    return () => clearTimeout(timeoutId);

  }, [list]);

  return (
    <Container>
      {
        data.map(({ userID, displayName }) => (
          <Item key={userID} id={userID} $index={scoreMap[userID].position}>
            {scoreMap[userID].position + 1}
            <DisplayPicture> {displayName.slice(0, 1)} </DisplayPicture>
            <p> {displayName} </p>
            <Score score={scoreMap[userID].score}/>
          </Item>
        ))
      }
    </Container>
  );
}
