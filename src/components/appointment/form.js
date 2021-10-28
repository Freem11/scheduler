import React, { useState } from 'react';
import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


 function cancel() {
    reset()
    props.onCancel()
  };

  function reset() {
    setName("")
    setInterviewer("")
  }
  
  return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <input onChange={(event) => setName(event.target.value)}
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={name}
      />
    </form>
    <InterviewerList 
      onChange={setInterviewer}
      interviewers= {props.interviewers}
      interviewer= {interviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={props.onSave}>Save</Button>
    </section>
  </section>
</main>

  )
};
