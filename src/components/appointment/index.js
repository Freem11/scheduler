import React, { Fragment } from 'react'
import "./styles.scss";
import Header from "./header";
import Show from "./show";
import Empty from "./empty";



export default function Appointment(props) {

  const formatApts = function() {
    if (!props.time) {
      return "No Appointments"
    } else {
      return `Appointment at ${props.time}`
    }
  }
   
  return (

    <article className="appointment">
    <Header time={props.time} />
    {props.interview ? <Show/> : <Empty/>}
    
    </article>

  )
}

