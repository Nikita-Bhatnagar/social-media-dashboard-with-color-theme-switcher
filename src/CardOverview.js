function CardOverview(props) {
  return (
    <div className={`col col-o-${props.id + 1}`}>
      <div className="row-1">
        <p className="likes">{props.statType}</p>
        <img src={props.iconUrl} className="icon-over" />
      </div>
      <div className="row-2">
        <p className="over-stat">{props.stat}</p>
        <div>
          <img src={`images/icon-${props.percIconType}.svg`} />
          <span className="change">{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}
export default CardOverview;
