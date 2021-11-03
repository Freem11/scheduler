export function getAppointmentsForDay(state, day) {
  let finalArr = [];

  state.days.forEach((element) => {
    if (element.name === day) {
      element.appointments.forEach((microElement) => {
        for (let key in state.appointments) {
          if (key == microElement) {
            finalArr.push(state.appointments[key]);
          }
        }
      });
    }
  });

  return finalArr;
}

export function getInterview(state, interview) {
  let finalObj = {};
  if (interview === null) {
    return null;
  }

  for (let element in state.interviewers) {
    if (element == interview.interviewer) {
      finalObj.student = interview.student;
      finalObj.interviewer = state.interviewers[element];
    }
  }

  if (Object.keys(finalObj).length === 0) {
    finalObj = null;
  }
  return finalObj;
}

export function getInterviewersForDay(state, day) {
  let finalArr = [];

  state.days.forEach((element) => {
    if (element.name === day) {
      const intArr = element.interviewers;
      return intArr.map((int) => {
        return finalArr.push(state.interviewers[int]);
      });
    }
  });

  return finalArr;
}


