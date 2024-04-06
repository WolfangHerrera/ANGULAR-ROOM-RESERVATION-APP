const url = 'http://localhost:8083/';
export const environment = {
  apiUserRegiser: url + 'registerUser',
  apiUserLogin: url + 'loginUser',
  apiUserValidate: url + 'validateSession',
  apiReservationMake: url + 'makeReservation',
  apiReservationGet: url + 'getReservation',
  apiReservationCancel: url + 'cancelReservation',
};
