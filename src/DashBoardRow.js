import React from "react";
import Card from "./Card";
const data = [
  {
    iconUrl: "images/icon-facebook.svg",
    userName: "@nathanf",
    stat: "1987",
    statType: "FOLLOWERS",
    voteIconType: "up",
    noOfVotes: 12,
  },
  {
    iconUrl: "images/icon-twitter.svg",
    userName: "@nathanf",
    stat: "1044",
    statType: "FOLLOWERS",
    voteIconType: "up",
    noOfVotes: 99,
  },
  {
    iconUrl: "images/icon-instagram.svg",
    userName: "@realnathanf",
    stat: "11k",
    statType: "FOLLOWERS",
    voteIconType: "up",
    noOfVotes: 1099,
  },
  {
    iconUrl: "images/icon-youtube.svg",
    userName: "Nathan F.",
    stat: "8239",
    statType: "SUBSCRIBERS",
    voteIconType: "down",
    noOfVotes: 144,
  },
];

function DashBoardRow(props) {
  const cardsArr = data.map((elem, i) => {
    return (
      <Card
        iconUrl={elem.iconUrl}
        userName={elem.userName}
        stat={elem.stat}
        statType={elem.statType}
        voteIconType={elem.voteIconType}
        noOfVotes={elem.noOfVotes}
        className={`col col-${i + 1}`}
        key={i}
      ></Card>
    );
  });
  return <div className="dashboard-row">{cardsArr}</div>;
}
export default DashBoardRow;
