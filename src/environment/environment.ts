export const environment = {
  url: 'http://localhost:8083/',
  apiUserRegiser: '${this.url}' + 'registerUser',
  apiUserLogin: '${this.url}' + 'loginUser',
  apiUserValidate: '${this.url}' + 'validateSession',
  apiReservationMake: '${this.url}' + 'makeReservation',
  apiReservationGet: '${this.url}' + 'getReservation',
  apiReservationCancel: '${this.url}' + 'cancelReservation',
};
