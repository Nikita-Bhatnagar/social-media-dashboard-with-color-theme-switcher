import CardOverview from "./CardOverview";
const data1 = [
  {
    statType: "Page Views",
    iconUrl: "images/icon-facebook.svg",
    stat: "87",
    percIconType: "up",
    percentage: "3",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-facebook.svg",
    stat: "52",
    percIconType: "down",
    percentage: "2",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-instagram.svg",
    stat: "5462",
    percIconType: "up",
    percentage: "2257",
  },
  {
    statType: "Profile Views",
    iconUrl: "images/icon-instagram.svg",
    stat: "52k",
    percIconType: "up",
    percentage: "1375",
  },
];
const data2 = [
  {
    statType: "Retweets",
    iconUrl: "images/icon-twitter.svg",
    stat: "117",
    percIconType: "up",
    percentage: "303",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-twitter.svg",
    stat: "507",
    percIconType: "up",
    percentage: "553",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-youtube.svg",
    stat: "107",
    percIconType: "down",
    percentage: "19",
  },
  {
    statType: "Total Views",
    iconUrl: "images/icon-youtube.svg",
    stat: "1407",
    percIconType: "down",
    percentage: "12",
  },
];

function OverviewRow(props) {
  let data = [];
  if (props.className.includes("overview-row-1")) data = data1;
  else data = data2;

  const cards = data.map((elem, i) => {
    return (
      <CardOverview
        statType={elem.statType}
        stat={elem.stat}
        iconUrl={elem.iconUrl}
        percIconType={elem.percIconType}
        percentage={elem.percentage}
        key={i}
        id={i}
      ></CardOverview>
    );
  });
  return <div className={props.className}>{cards}</div>;
}
export default OverviewRow;
