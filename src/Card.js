function Card(props) {
  return (
    <div className={props.className}>
      <div className="icon-and-name">
        <img src={props.iconUrl} alt="" className="icon" />
        <div className="name">{props.userName}</div>
      </div>
      <p className="stat">{props.stat}</p>
      <p>{props.statType}</p>
      <img src={`../images/icon-${props.voteIconType}.svg`} alt="" />
      <span>{props.noOfVotes} Today</span>
    </div>
  );
}
export default Card;
