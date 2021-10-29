export default function getAppointmentsForDay(state, day) {
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
  console.log(finalArr);
  return finalArr;
}
