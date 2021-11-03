import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./header";
import Show from "./show";
import Empty from "./empty";
import Form from "./form";
import Status from "./status";
import Error from "./error";
import Confirm from "./confirm";

import useVisualMode from "hooks/useVisualMode";
// import { create } from "react-test-renderer";
// import { getInterviewersForDay } from "helpers/selectors";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERR_DELETE = "ERR_DELETE";
const ERR_SAVE = "ERR_SAVE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING, true);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERR_SAVE, true));
  }

  function del() {
    transition(DELETE, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERR_DELETE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back(EMPTY)}
        />
      )}

      {mode === CONFIRM && (
        <Confirm onConfirm={del} onCancel={() => back(SHOW)} />
      )}

      {mode === SAVING && <Status message={"Saving..."} />}
      {mode === DELETE && <Status message={"Deleting..."} />}

      {mode === ERR_SAVE && <Error onClose={() => back(CONFIRM)} />}
      {mode === ERR_DELETE && <Error onClose={() => back(CONFIRM)} />}

      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back(EMPTY)}
        />
      )}
    </article>
  );
}
