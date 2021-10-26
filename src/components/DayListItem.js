import React from "react";
import "components/DayListItem.scss";

import classNames from 'classnames';

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
   "day-list__item--selected": props.selected === true,
   "day-list__item--full": props.spots === 0,
})

const formatSpots = classNames( {
  "no spots remaining": props.spots === 0,
  "spot remaining": props.spots === 1,
  "spots remaining" : props.spots > 1,
})

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
     <h2 className="day-list__text--regular" >{props.name}</h2>
     {props.spots === 0 && <h3 className="day-list__text--light"> {formatSpots}</h3>}
     {props.spots !== 0 && <h3 className="day-list__text--light"> {props.spots} {formatSpots}</h3>}
    </li>
  );
}