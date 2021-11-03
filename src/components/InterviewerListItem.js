import React from "react";
import "components/InterviewerListItem.scss";

import classNames from 'classnames';

export default function InterviewerListItem(props) {


  const selected = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
 })

 const image = classNames("interviewers__item-image")

return (
   <li className={selected} onClick={() => props.onChange(props.id)}>
   <img className={image}
    src={props.avatar}
  />
   {props.selected && props.name}
  </li>
);

}


