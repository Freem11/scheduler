import React from "react";
import "components/DayListItem.scss";

import classNames from 'classnames';

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
   "day-list__item--selected": props.selected,
   "day-list__item--full": !props.spots,
})

const formatSpots = function() {
  if (!props.spots) {
    return "no spots remaining"
  }

  if (props.spots === 1) {
    return `${props.spots} spot remaining`
  }

  return `${props.spots} spots remaining`
}

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
     <h2 className="day-list__text--regular" >{props.name}</h2>
     <h3 className="day-list__text--light"> {formatSpots()}</h3>
    </li>
  );
}