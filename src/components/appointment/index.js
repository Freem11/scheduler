import React from "react";
import "./styles.scss";

export default function Appointment(props) {

  const formatApts = function() {
    if (!props.time) {
      return "No Appointments"
    } else {
      return `Appointment at ${props.time}`
    }
  }
   


  return (

    <article className="appointment">{formatApts()}</article>

  )
}

