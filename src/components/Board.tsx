import { useState, useEffect, useMemo } from "react";

import data from "../assets/data";

import Score from "./Score";

import BoardContainer from "./BoardContainer";
import DisplayPicture from "./DisplayPicture";
import BoardItem from "./BoardItem";
import Rank from "./Rank";

const relevantData = data.map(d => [d.userID, d.score]) as [string, number][];

export default function Board() {
  const [list, setList] = useState<[string, number][]>(relevantData);

  // just a quick way to find score / position based on userId
  const scoreMap = useMemo(() => {
    return list.reduce((acc, cur, position) => {
      acc[cur[0]] = { score: cur[1], position };
      return acc;
    }, {} as { [key: string]: { score: number; position: number; } });
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
    <BoardContainer>
      {
        data.map(({ userID, displayName, picture }) => (
          <BoardItem key={userID} id={userID} $index={scoreMap[userID].position} $last={scoreMap[userID].position === list.length - 1}>
            <div>
              <Rank $rank={scoreMap[userID].position}> {scoreMap[userID].position + 1} </Rank>
              <DisplayPicture src={picture} />
              <p> {displayName} </p>
            </div>
            <Score score={scoreMap[userID].score} />
          </BoardItem>
        ))
      }
    </BoardContainer>
  );
}
